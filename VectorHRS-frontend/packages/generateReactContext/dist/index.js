"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChooseAndSync = void 0;
const tslib_1 = require("tslib");
const openApi = (0, tslib_1.__importStar)(require("openapi-typescript"));
const Config_1 = require("./constants/Config");
const fs = (0, tslib_1.__importStar)(require("fs"));
const path = (0, tslib_1.__importStar)(require("path"));
const axios_1 = (0, tslib_1.__importDefault)(require("axios"));
const swaggerDocUrl = `${Config_1.BASE_URL}/${Config_1.SWAGGER_ENDPOINT}`;
const openapiTS = openApi.default;
const GREEN = '\x1b[32m';
const RED = '\x1b[41m';
const PATH_DIR = '../../resources/src/';
function titleCaseWord(word) {
    if (!word)
        return word;
    return word[0].toUpperCase() + word.substr(1).toLowerCase();
}
const ChooseAndSync = () => {
    (0, axios_1.default)({
        method: 'GET',
        url: `${swaggerDocUrl}`
    })
        .then((swaggerDoc) => {
        if (swaggerDoc.data) {
            console.log(GREEN, 'Generating the models ...');
            const dirPath = path.resolve(__dirname, PATH_DIR);
            const pathsObj = swaggerDoc.data.paths;
            let filesToParse = {};
            let fileToWrite = {};
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
                                    definitionsToContext: undefined,
                                    FunctionsToContext: [],
                                    path: []
                                };
                            }
                            let definition = '';
                            filesToParse[fileName].path.push(path);
                            if (functionName) {
                                let paramsToContext;
                                let modelToContext;
                                if (parameters && parameters.length > 0) {
                                    if (parameters[0].in === 'body') {
                                        definition = parameters[0].schema.$ref.replace('#/definitions/', '');
                                        modelToContext = `definitions["${definition}"]`;
                                        filesToParse[fileName].definitionsToContext = definition;
                                        paramsToContext = `${modelToContext}[] | ${modelToContext}[]`;
                                    }
                                    else {
                                        paramsToContext = `operations["${functionName}"]["parameters"]`;
                                    }
                                }
                                filesToParse[fileName].FunctionsToContext.push({
                                    functionName,
                                    parameters: paramsToContext,
                                    verb: verb,
                                    path: path
                                });
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
                            if (Object.prototype.hasOwnProperty.call(functionsToParse, func)) {
                                fileToWrite[fileName] += `${functionsToParse[func].functionName},`;
                            }
                        }
                        fileToWrite[fileName] += `
               } from "../api";
              `;
                        fileToWrite[fileName] += `
                import React, { createContext, useState, FC } from "react";
                `;
                        fileToWrite[fileName] += `
                interface I${fileName} {
                `;
                        fileToWrite[fileName] += `
                  ${fileName}Data?:${modelsToParse}[];
                `;
                        for (const func in functionsToParse) {
                            if (Object.prototype.hasOwnProperty.call(functionsToParse, func)) {
                                let args = ``;
                                if (functionsToParse[func].path.indexOf('{id}') > -1) {
                                    args += `id:number,`;
                                }
                                if (functionsToParse[func].parameters) {
                                    args += `data:${functionsToParse[func].parameters},`;
                                }
                                const newNameFunction = functionsToParse[func].functionName.split('_')[0] + titleCaseWord(functionsToParse[func].functionName.split('_')[1]);
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
                const ${titleCaseWord(fileName)}Context = React.createContext<I${fileName}>(defaultState);`;
                        fileToWrite[fileName] += `
                const ${titleCaseWord(fileName)}Provider: React.FC<IcontextProvider> = ({ children, headers }) => {
                  `;
                        fileToWrite[fileName] += `
                  /* prettier-ignore */
                  const [${modelsToParse}DataList, set${modelsToParse}DataList] = React.useState<Array<${modelsToParse}>> ([]);`;
                        for (const func in functionsToParse) {
                            if (Object.prototype.hasOwnProperty.call(functionsToParse, func)) {
                                let args = ``;
                                let args2 = '';
                                if (functionsToParse[func].path.indexOf('{id}') > -1) {
                                    args += `id:string,`;
                                    args2 += 'id,';
                                }
                                if (functionsToParse[func].parameters) {
                                    args += `data:${functionsToParse[func].parameters},`;
                                    args2 += 'data,';
                                }
                                const newNameFunction = functionsToParse[func].functionName.split('_')[0] + titleCaseWord(functionsToParse[func].functionName.split('_')[1]);
                                fileToWrite[fileName] += `
                  const ${newNameFunction} = async ( ${args.slice(0, -1)} ) => {
                    if(data)
                    {
                      const result = await ${functionsToParse[func].functionName}( ${args2.slice(0, -1)}, headers);
                      let prevState = ${modelsToParse}DataList;
                      `;
                                if (functionsToParse[func].verb === 'get')
                                    fileToWrite[fileName] += `
                      let found = false;
                      const new${modelsToParse} = prevState.map((el:any) => {
                        if(el.id === result.data.id)
                        {

                          found = true;
                          return {...el, result.data };

                        }
                        else
                        {
                          return el;
                        }
                      }
                      ))

                      if(!found)
                      {
                        let new${modelsToParse}
                        if(!Array.isArray(result.data))
                        new${modelsToParse} = prevState.push(result.data);
                        else
                        new${modelsToParse} = prevState.concat(result.data);
                      }
                      `;
                                if (functionsToParse[func].verb === 'post')
                                    fileToWrite[fileName] += `  
                      //Read or Create
                      let new${modelsToParse}
                      if(!Array.isArray(result.data))
                      new${modelsToParse} = prevState.push(result.data);
                      else
                      new${modelsToParse} = prevState.concat(result.data);
                      `;
                                if (functionsToParse[func].verb === 'put')
                                    fileToWrite[fileName] += `  
                      //update
                      let new${modelsToParse}
                      if(!Array.isArray(result.data))
                      new${modelsToParse} = prevState.map((el:any) => (
                        el.id === result.data.id ? {...el, result.data }: el
                      ))
                      else
                      //update bulk 
                      new${modelsToParse} = prevState.map((el:any) => (
                        el.id === result.data.id ? {...el, result.data }: el
                      ))

                      `;
                                if (functionsToParse[func].verb === 'delete')
                                    fileToWrite[fileName] += `  
                      //delete
                      const new${modelsToParse} = prevState.filter( (el:any) => (el.id !== result.data.id )
                      `;
                                fileToWrite[fileName] += `  
                    }
                  }
                  `;
                            }
                        }
                        fileToWrite[fileName] += `
              return (
              <${titleCaseWord(fileName)}Context.Provider
              
              value={{
                ${fileName}Data:${modelsToParse}DataList,
              `;
                        for (const func in functionsToParse) {
                            if (Object.prototype.hasOwnProperty.call(functionsToParse, func)) {
                                const newNameFunction = functionsToParse[func].functionName.split('_')[0] + titleCaseWord(functionsToParse[func].functionName.split('_')[1]);
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
                    //const file = prettier.format(fileToWrite[fileName]);
                    const file = fileToWrite[fileName];
                    fs.writeFile(dirPath + '/context/' + fileName + '.tsx', file, 'utf8', async () => {
                        return console.log(GREEN, 'context are Generated in ' +
                            dirPath +
                            '==> /context/' +
                            fileName);
                    });
                }
            }
        }
        else {
            return console.log(RED, 'Failed, Swagger object is empty');
        }
    })
        .catch((err) => {
        console.log('err: ', err);
    });
};
exports.ChooseAndSync = ChooseAndSync;
(0, exports.ChooseAndSync)();
//# sourceMappingURL=index.js.map