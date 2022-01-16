import * as openApi from 'openapi-typescript';
import prettier from 'prettier';
import { BASE_URL, SWAGGER_ENDPOINT } from './constants/Config';
import * as fs from 'fs';
import * as path from 'path';
import axios, { AxiosResponse } from 'axios';

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
        let indexImportFileToWrite: any = {};
        let indexExportFileToWrite: any = {};

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
                    FunctionsToContext: [] as [],
                    path: [] as string[]
                  };
                }

                let definition = '';
                let list = false;
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

                      filesToParse[fileName].definitionsToContext = definition

                      paramsToContext = `${modelToContext} | ${modelToContext}[]`;
                    }
                    else {
                      paramsToContext = `operations["${functionName}"]["parameters"]`;
                      list = true;
                    }
                  }

                  filesToParse[fileName].FunctionsToContext.push(
                    {
                      functionName,
                      parameters: paramsToContext,
                      verb:verb,
                      list: list,
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
            if (!fileToWrite[fileName] && modelsToParse) {
              fileToWrite[fileName] = '';
              fileToWrite[fileName] += `
              import { Api, operations, definitions } from "@vhrs/models";`
              fileToWrite[fileName] += `
              const {`;

              for (const func in functionsToParse) {
                if (
                  Object.prototype.hasOwnProperty.call(functionsToParse, func)
                ) {
                  fileToWrite[fileName] += `${functionsToParse[func].functionName},`
                }
              }
              
              
              fileToWrite[fileName] += `
               } = Api;
              `
              fileToWrite[fileName] += `
                import { createContext, useState, FC, ReactNode } from "react";
                `;

              fileToWrite[fileName] += `
                interface IAction {
                  verb:string,
                  results:  number | definitions["${modelsToParse}"] | definitions["${modelsToParse}"][],
                }


                interface I${fileName} {
                  loading: boolean;
                  count: number;
                  next?: string;
                  previous?: string;
                  logActions: IAction[];

                `;
              fileToWrite[fileName] += `
                  ${fileName}Data?:definitions["${modelsToParse}"][];
                `;
     

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
                  
                  let returnType = 'void';
                  
                  fileToWrite[fileName] += `
                  ${newNameFunction}FuncProp: ( ${args.slice(0, -1)} ) => Promise<${returnType}>;
                  `;
                }
              }


              fileToWrite[fileName] += `
              }
              interface IcontextProvider{
                children: ReactNode,
                headers: any
              }


              interface Istate{
                count: number;
                next?: string;
                previous?: string;
                logActions: IAction[];
                results : definitions["${modelsToParse}"][]
              }

              const  initialState:Istate = {
                count: 0,
                logActions:[],
                results : []
              }


              const defaultContextState = {
                count: 0,
                loading: false,
                logActions:[],
                `
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
                  
                    let returnType = 'void';
                    
                    fileToWrite[fileName] += `
                    ${newNameFunction}FuncProp: async ( ${args.slice(0, -1)} ):Promise<${returnType}> => {},
                    `;
                  }
                }
              fileToWrite[fileName] +=`
              };
                /* prettier-ignore */
                export const ${titleCaseWord(
                  fileName
                )}Context = createContext<I${fileName}>(defaultContextState);`;

              indexImportFileToWrite[fileName] = []
              indexImportFileToWrite[fileName][0] =`${titleCaseWord(fileName)}Provider` ;
              indexImportFileToWrite[fileName][1] =`${titleCaseWord(fileName)}Context` ;


              indexExportFileToWrite[fileName] = []
              indexExportFileToWrite[fileName][0] =`${titleCaseWord(fileName)}Provider` ;
              indexExportFileToWrite[fileName][1] =`${titleCaseWord(fileName)}Context` ;

              fileToWrite[fileName] += `export 
                const ${titleCaseWord(
                  fileName
                )}Provider: FC<IcontextProvider> = ({ children, headers }) => {
                  `;

                  fileToWrite[fileName] += `
                  /* prettier-ignore */
                  const [${modelsToParse}DataList, set${modelsToParse}DataList] = useState<Istate> (initialState);
                  /* prettier-ignore */
                  const [loading, setLoading] = useState<boolean> (false);
                  
                  `;


              for (const func in functionsToParse) {
                if (
                  Object.prototype.hasOwnProperty.call(functionsToParse, func)
                ) {

                  let args = ``;
                  let args2 = '';
                  let cond = ''
                  if (functionsToParse[func].path.indexOf('{id}') > -1) {
                    args += `id:number,`;
                    args2 += 'id.toString(),';
                    cond += 'id &&'
                  }
                  if (functionsToParse[func].parameters) {
                    args += `data:${functionsToParse[func].parameters},`;
                    args2 += 'data,';
                    cond += 'data &&'
                  }

                  let returnType = 'void';
                  
                  const newNameFunction =functionsToParse[func].functionName.split('_')[0]+ titleCaseWord(functionsToParse[func].functionName.split('_')[1])
                  fileToWrite[fileName] += `
                  const ${newNameFunction} = async ( ${args.slice(0, -1)} ):Promise<${returnType}> => {
                    if(${cond.slice(0, -2)})
                    {
                      setLoading(true);
                      const result = await ${functionsToParse[func].functionName}( ${args2.slice(0, -1)}, headers);
                      let prevStateResults = ${modelsToParse}DataList.results;
                      let logActions = ${modelsToParse}DataList.logActions;
                      

                      `
                      

                      if(functionsToParse[func].verb === 'get' && !functionsToParse[func].list)
                      fileToWrite[fileName] += `
                      logActions.push({verb:"${functionsToParse[func].verb}", results: result.data });
                      let found = false;
                      let new${modelsToParse} = prevStateResults.map((el:definitions["${modelsToParse}"]) => {
                        if(el.id === result.data.id)
                        {

                          found = true;
                          return {...el, ...result.data  };

                        }
                        else
                        {
                          return el;
                        }
                      })
                      if(!found)
                      {
                        new${modelsToParse} = prevStateResults.concat(result.data);
                      }


                      set${modelsToParse}DataList(
                        {
                          ...${modelsToParse}DataList,
                          results : new${modelsToParse}
                        }
                      )
                      `

                      if(functionsToParse[func].verb === 'get' && functionsToParse[func].list)
                      fileToWrite[fileName] += `
                      logActions.push({verb:"${functionsToParse[func].verb}", results: result.data.results });
                      let found = false;
                      let newCount= ${modelsToParse}DataList.count + result.data.count;
                      let newNext= result.data.next;
                      let newPrevious = result.data.previous;

                      let new${modelsToParse} = prevStateResults.map((el:definitions["${modelsToParse}"]) => {
                        const preEl = prevStateResults.filter((resultEl:definitions["${modelsToParse}"]) => {
                          return el.id === resultEl.id 
                        });
                        
                        if(preEl.length > 0 )
                        {

                          found = true;
                          return {...el, ...preEl[0] };

                        }
                        else
                        {
                          return el;
                        }
                      });

                      if(!found)
                      {
                        new${modelsToParse} = prevStateResults.concat(result.data.results);
                      }


                      set${modelsToParse}DataList(
                          {
                            count: newCount,
                            next: newNext,
                            previous: newPrevious,
                            logActions: logActions,
                            results : new${modelsToParse}
                          }
                      )

                      `


                      if(functionsToParse[func].verb === 'post')
                      fileToWrite[fileName] += `  
                      //Create

                      let newCount = ${modelsToParse}DataList.count;
                      logActions.push({verb:"${functionsToParse[func].verb}", results: result.data });
                      if(!Array.isArray(result.data))
                      {
                        newCount = prevStateResults.push(result.data);
                      }
                      else
                      {
                        prevStateResults = prevStateResults.concat(result.data);
                        newCount = prevStateResults.length
                      }

                      set${modelsToParse}DataList(
                        {
                          ...${modelsToParse}DataList,
                          count: newCount,
                          results : prevStateResults
                        }
                      )
                      `
                      
                      if(functionsToParse[func].verb === 'put' || functionsToParse[func].verb === 'patch' )
                      fileToWrite[fileName] += `  
                      //update
                      logActions.push({verb:"${functionsToParse[func].verb}", results: result.data });
                      let new${modelsToParse}
                      if(!Array.isArray(result.data))
                      new${modelsToParse} = prevStateResults.map((el:definitions["${modelsToParse}"]) => (
                        el.id === result.data.id ? {...el, ...result.data }: el
                      ))
                      else
                      //update bulk 
                      new${modelsToParse} = prevStateResults.map((el:definitions["${modelsToParse}"]) => (
                        el.id === result.data.id ? {...el, ...result.data }: el
                      ))

                      set${modelsToParse}DataList(
                        {
                          ...${modelsToParse}DataList,
                          results : new${modelsToParse}
                        }
                      )

                      `
                      if(functionsToParse[func].verb === 'delete')
                      fileToWrite[fileName] += `
                      logActions.push({verb:"${functionsToParse[func].verb}", results: id });  
                      //delete
                      const new${modelsToParse} = prevStateResults.filter( (el:definitions["${modelsToParse}"]) => (el.id !== id ))

                      set${modelsToParse}DataList(
                        {
                          ...${modelsToParse}DataList,
                          results : new${modelsToParse}
                        }
                      )


                      `
                    fileToWrite[fileName] += `
                    
                      setLoading(false);
                    }
                  }
                  `;
                }
              }


              fileToWrite[fileName] += `
              return (
              <${titleCaseWord(fileName)}Context.Provider
              
              value={{
                count: ${modelsToParse}DataList.count,
                next: ${modelsToParse}DataList.next,
                previous: ${modelsToParse}DataList.previous,
                logActions: ${modelsToParse}DataList.logActions,
                loading: loading,
                ${fileName}Data:${modelsToParse}DataList.results,
              `
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

        let indexToWrite = '';
        for (const fileName in indexImportFileToWrite) {
          if (
            Object.prototype.hasOwnProperty.call(
              indexImportFileToWrite,
              fileName
            )
          ) {
            let file = 'import {' +indexImportFileToWrite[fileName][0]+ ',' +indexImportFileToWrite[fileName][1];
            file += `} from  "./${fileName}";
            `;
            indexToWrite += file;
          }
        }
        indexToWrite += 'export {';
        for (const fileName in indexExportFileToWrite) {
          if (
            Object.prototype.hasOwnProperty.call(
              indexExportFileToWrite,
              fileName
            )
          ) {
            let file = indexExportFileToWrite[fileName][0]+ ',' +indexExportFileToWrite[fileName][1] + ',';
            indexToWrite += file;
          }
        }
        indexToWrite = indexToWrite.slice(0, -1) + '};';
        const index = prettier.format(indexToWrite);
        fs.writeFile(
          dirPath + '/context/index.ts',
          index,
          'utf8',
          async () => {}
        );

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
