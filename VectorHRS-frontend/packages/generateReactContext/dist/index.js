"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChooseAndSync = void 0;
const tslib_1 = require("tslib");
const openApi = (0, tslib_1.__importStar)(require("openapi-typescript"));
const prettier_1 = (0, tslib_1.__importDefault)(require("prettier"));
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
                                    definitionsToContext: {},
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
                                        filesToParse[fileName].definitionsToContext[definition] = modelToContext;
                                        paramsToContext = `${modelToContext}[]`;
                                    }
                                    else {
                                        paramsToContext = `operations["${functionName}"]["parameters"]`;
                                    }
                                }
                                filesToParse[fileName].FunctionsToContext.push({
                                    functionName,
                                    parameters: paramsToContext,
                                    modelRef: modelToContext,
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
                        for (const model in modelsToParse) {
                            if (Object.prototype.hasOwnProperty.call(modelsToParse, model)) {
                                fileToWrite[fileName] += `
                      ${model}Data?:${modelsToParse[model]}[];
                    `;
                            }
                        }
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
                        for (const model in modelsToParse) {
                            if (Object.prototype.hasOwnProperty.call(modelsToParse, model)) {
                                fileToWrite[fileName] += `
                  /* prettier-ignore */
                  const [${model}DataList, set${model}DataList] = React.useState<Array<${modelsToParse[model]}>> ([]);`;
                            }
                        }
                        for (const func in functionsToParse) {
                            if (Object.prototype.hasOwnProperty.call(functionsToParse, func)) {
                                let args = ``;
                                let args2 = '';
                                if (functionsToParse[func].path.indexOf('{id}') > -1) {
                                    args += `id:number,`;
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
              `;
                        for (const model in modelsToParse) {
                            if (Object.prototype.hasOwnProperty.call(modelsToParse, model)) {
                                fileToWrite[fileName] += `
                      ${model}Data:${model}DataList,
                    `;
                            }
                        }
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
                    const file = prettier_1.default.format(fileToWrite[fileName]);
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