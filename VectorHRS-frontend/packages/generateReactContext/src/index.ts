import * as openApi from 'openapi-typescript';
import prettier from 'prettier';
import { BASE_URL, SWAGGER_ENDPOINT } from './constants/Config';
import * as fs from 'fs';
import * as path from 'path';
import axios, { AxiosResponse } from 'axios';
import { stringify } from 'querystring';

const swaggerDocUrl = `${BASE_URL}/${SWAGGER_ENDPOINT}`;
const openapiTS = openApi.default;
const GREEN = '\x1b[32m';
const RED = '\x1b[41m';
const PATH_DIR = '../../resources/src/';

function titleCaseWord(word: string) {
  if (!word) return word;
  return word[0].toUpperCase() + word.substr(1).toLowerCase();
}

export const ChooseAndSync = () => {
  axios({
    method: 'GET',
    url: `${swaggerDocUrl}`
  })
    .then((swaggerDoc: AxiosResponse) => {
      if (swaggerDoc.data) {
        console.log(GREEN, 'Generating the models ...');
        const dirPath = path.resolve(__dirname, PATH_DIR);

        const pathsObj: any = swaggerDoc.data.paths;
        let filesToParse: any = {};
        let fileToWrite: any = {};

        for (const path in pathsObj) {
          if (Object.prototype.hasOwnProperty.call(pathsObj, path)) {
            const element = pathsObj[path];

            for (const verb in element) {
              if (Object.prototype.hasOwnProperty.call(element, verb)) {
                const fileName = element[verb].tags;
                let functionName = element[verb].operationId;
                const parameters = element[verb].parameters;

                if (!filesToParse[fileName]) {
                  filesToParse[fileName] = {
                    definitionsToContext: {},
                    FunctionsToContext: [] as [],
                    path: [] as string[]
                  };
                }

                let definition = '';
                filesToParse[fileName].path.push(path);
                if (functionName) {
                  let paramsToContext;
                  let modelToContext
                  if (parameters && parameters.length > 0) {
                    if (parameters[0].in === 'body') {
                      definition = parameters[0].schema.$ref.replace(
                        '#/definitions/',
                        ''
                      );
                      modelToContext = `definitions["${definition}"]`;

                      filesToParse[fileName].definitionsToContext[definition] = modelToContext

                      paramsToContext = `${modelToContext}[]`;
                    }
                    else {
                      paramsToContext = `operations["${functionName}"]["parameters"]`;
                    }
                  }

                  filesToParse[fileName].FunctionsToContext.push(
                    {
                      functionName,
                      parameters: paramsToContext,
                      modelRef: modelToContext,
                      verb:verb,
                      path: path
                    }
                    
                  );
                }
              }
            }
          }
        }

        for (const fileName in filesToParse) {
          if (Object.prototype.hasOwnProperty.call(filesToParse, fileName)) {
            const filetoparse = filesToParse[fileName];
            const modelsToParse = filetoparse.definitionsToContext;
            const functionsToParse = filetoparse.FunctionsToContext;
            if (!fileToWrite[fileName]) {
              fileToWrite[fileName] = '';
              fileToWrite[fileName] += `
              import { operations, definitions } from "../Schemas";
              import {`;

              for (const func in functionsToParse) {
                if (
                  Object.prototype.hasOwnProperty.call(functionsToParse, func)
                ) {
                  fileToWrite[fileName] += `${functionsToParse[func].functionName},`
                }
              }
              
              
              fileToWrite[fileName] += `
               } from "../api";
              `
              fileToWrite[fileName] += `
                import React, { createContext, useState, FC } from "react";
                `;

              fileToWrite[fileName] += `
                interface I${fileName} {
                `;
              for (const model in modelsToParse) {
                if (
                  Object.prototype.hasOwnProperty.call(modelsToParse, model)
                ) {
                  fileToWrite[fileName] += `
                      ${model}Data?:${modelsToParse[model]}[];
                    `;
                }
              }

              for (const func in functionsToParse) {
                if (
                  Object.prototype.hasOwnProperty.call(functionsToParse, func)
                ) {

                  let args = ``;
                  if (functionsToParse[func].path.indexOf('{id}') > -1) {
                    args += `id:number,`;
                  }
                  if (functionsToParse[func].parameters) {
                    args += `data:${functionsToParse[func].parameters},`;
                  }


                  const newNameFunction =functionsToParse[func].functionName.split('_')[0]+ titleCaseWord(functionsToParse[func].functionName.split('_')[1])
                  fileToWrite[fileName] += `
                  ${newNameFunction}FuncProp?: ( ${args.slice(0, -1)} ) => Promise<void>;
                  `;
                }
              }


              fileToWrite[fileName] += `
              }
              interface IcontextProvider{
                children: React.ReactNode,
                headers: any
              }

              const defaultState = {};
                /* prettier-ignore */
                const ${titleCaseWord(
                  fileName
                )}Context = React.createContext<I${fileName}>(defaultState);`;

              fileToWrite[fileName] += `
                const ${titleCaseWord(
                  fileName
                )}Provider: React.FC<IcontextProvider> = ({ children, headers }) => {
                  `;

              for (const model in modelsToParse) {
                if (
                  Object.prototype.hasOwnProperty.call(modelsToParse, model)
                ) {
                  fileToWrite[fileName] += `
                  /* prettier-ignore */
                  const [${model}DataList, set${model}DataList] = React.useState<Array<${modelsToParse[model]}>> ([]);`;
                }
              }

              for (const func in functionsToParse) {
                if (
                  Object.prototype.hasOwnProperty.call(functionsToParse, func)
                ) {

                  let args = ``;
                  let args2 = ''
                  if (functionsToParse[func].path.indexOf('{id}') > -1) {
                    args += `id:number,`;
                    args2 += 'id,';
                  }
                  if (functionsToParse[func].parameters) {
                    args += `data:${functionsToParse[func].parameters},`;
                    args2 += 'data,';
                  }

                  const newNameFunction =functionsToParse[func].functionName.split('_')[0]+ titleCaseWord(functionsToParse[func].functionName.split('_')[1])
                  fileToWrite[fileName] += `
                  const ${newNameFunction} = async ( ${args.slice(0, -1)} ) => {
                   if(data)
                   {
                    const result = await ${functionsToParse[func].functionName}( ${args2.slice(0, -1)}, headers);
                    let prevState = ${functionsToParse[func].modelRef}DataList;


                    //update
                    const new${functionsToParse[func].modelRef} = prevState.map(el => (
                      el.id === ? {...el, key: value}: el
                    ))



                   }
                    
                   
                  }
                  `;
                }
              }


              fileToWrite[fileName] += `
              return (
              <${titleCaseWord(fileName)}Context.Provider
              
              value={{
              `
              
              
              for (const model in modelsToParse) {
                if (
                  Object.prototype.hasOwnProperty.call(modelsToParse, model)
                ) {
                  fileToWrite[fileName] += `
                      ${model}Data:${model}DataList,
                    `;
                }
              }


              for (const func in functionsToParse) {
                if (
                  Object.prototype.hasOwnProperty.call(functionsToParse, func)
                ) {
                  
                  const newNameFunction =functionsToParse[func].functionName.split('_')[0]+ titleCaseWord(functionsToParse[func].functionName.split('_')[1])
                  fileToWrite[fileName] += `
                  ${newNameFunction}FuncProp: ${newNameFunction},
                  `;
                }
              }


              fileToWrite[fileName] += `
                }}
              >
              { children }
              </${titleCaseWord(fileName)}Context.Provider>
            );};
              `;
            }
          }
        }

        for (const fileName in fileToWrite) {
          if (Object.prototype.hasOwnProperty.call(fileToWrite, fileName)) {
            const file = prettier.format(fileToWrite[fileName]);
            fs.writeFile(
              dirPath + '/context/' + fileName + '.tsx',
              file,
              'utf8',
              async () => {
                return console.log(
                  GREEN,
                  'context are Generated in ' +
                    dirPath +
                    '==> /context/' +
                    fileName
                );
              }
            );
          }
        }


      } else {
        return console.log(RED, 'Failed, Swagger object is empty');
      }
    })
    .catch((err: any) => {
      console.log('err: ', err);
    });
};
ChooseAndSync();
