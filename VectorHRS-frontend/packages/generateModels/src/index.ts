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
const PATH_DIR = '../../models/src/';

export const ChooseAndSync = () => {
  axios({
    method: 'GET',
    url: `${swaggerDocUrl}`
  })
    .then((swaggerDoc: AxiosResponse) => {
      if (swaggerDoc.data) {
        console.log(GREEN, 'Generating the models ...');
        const dirPath = path.resolve(__dirname, PATH_DIR);
        openapiTS(swaggerDoc.data).then((output: string) => {
          if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath);
          }
          fs.writeFile(dirPath + '/schemas.ts', output, 'utf8', async () => {
            const pathsObj: any = swaggerDoc.data.paths;
            const definitions: any = swaggerDoc.data.definitions;

            let FileToWrite: any = {};
            let indexImportFileToWrite: any = {};
            let indexExportFileToWrite: any = {};
            for (const path in pathsObj) {
              if (Object.prototype.hasOwnProperty.call(pathsObj, path)) {
                const element = pathsObj[path];

                for (const verb in element) {
                  if (Object.prototype.hasOwnProperty.call(element, verb)) {
                    const fileName = element[verb].tags;
                    const functionName = element[verb].operationId;
                    const parameters = element[verb].parameters;
                    let definition = '';
                    let model = '';
                    let fields = '' ;
                    if (parameters && parameters.length > 0) {
                      if (parameters[0].in === 'body') {
                        definition = parameters[0].schema.$ref.replace(
                          '#/definitions/',
                          ''
                        );
                        model = `definitions["${definition}"] | definitions["${definition}"][]`;
                        fields = JSON.stringify(definitions[definition]); 
                      } else {
                        model = `operations["${functionName}"]["parameters"]`;
                        fields =  JSON.stringify(parameters); 
                      }
                    }



               

                    if (functionName) {
                      if (!FileToWrite[fileName]) {
                        FileToWrite[fileName] = '';
                        FileToWrite[fileName] += `
                        import {operations, definitions} from "../schemas";
                        import {AxiosResponse} from "axios"
                        import { dataLayerObj } from "../instance";
                        import type { RequestType } from "../instance";

                        `;
                      }

                      if (!indexImportFileToWrite[fileName]) {
                        indexImportFileToWrite[fileName] = `import {`;
                        indexExportFileToWrite[fileName] = '';
                      }


                      if(fields !==''){

                        indexImportFileToWrite[fileName] += functionName + `,${functionName}Fields,`;
                        indexExportFileToWrite[fileName] += functionName + `,${functionName}Fields,`
                        FileToWrite[fileName] += `
                        export const ${functionName}Fields = ${fields};
                        `
                      }
                      else{
                        indexImportFileToWrite[fileName] += functionName + `,`;
                        indexExportFileToWrite[fileName] += functionName + `,`
                      }
                      
                      FileToWrite[fileName] += `
                    export const ${functionName} = async ( `;
                      if (path.indexOf('{id}') > -1)
                        FileToWrite[fileName] += `id: string,`;
                      if (model) FileToWrite[fileName] += `data: ${model},`;
                      let response = `operations["${functionName}"]["responses"]`;

                      if (verb === 'get' || verb === 'put' || verb === 'patch')
                        response += '[200]';
                      if (verb === 'post') response += '[201]';
                      if (verb === 'delete') response = 'any';

                      FileToWrite[fileName] += `
                       headers: any, _apiPrefix ='/api', force = false ) : Promise<AxiosResponse<${response}["schema"]>> => {
                        let endpoint = _apiPrefix + "${path}";`;
                      if (path.indexOf('{id}') > -1)
                        FileToWrite[fileName] += `
                        endpoint = endpoint.replace("{id}", id.toString())`;

                        FileToWrite[fileName] += `
                        const request:RequestType = {
                          endpoint,
                          name: "${fileName}",
                          verb: "${verb}",
                        }`;

                      if(verb === 'get')
                      {
                        FileToWrite[fileName] += `
                          return await dataLayerObj.requestApi(
                          request,
                          headers,
                          force,
                          `;
                        if (model) FileToWrite[fileName] += `data.query`;
                        FileToWrite[fileName] += `
                          );`;
                      }
                      else if (verb === 'post') {
                        FileToWrite[fileName] += `
                          return await dataLayerObj.requestApi(
                          request,
                          headers,
                          force,
                          `;
                        if (model) FileToWrite[fileName] += `data`;
                        FileToWrite[fileName] += `
                          );`;
                      } else {
                        FileToWrite[fileName] += `
                          return dataLayerObj.requestApi(
                          request,
                          headers,
                          force,
                          `;
                        if (model) FileToWrite[fileName] += `data`;
                        FileToWrite[fileName] += `
                          );`;
                      }

                      FileToWrite[fileName] += `}`;
                    }
                  }
                }
              }
            }

            let indexToWrite: string = '';
            for (const fileName in indexImportFileToWrite) {
              if (
                Object.prototype.hasOwnProperty.call(
                  indexImportFileToWrite,
                  fileName
                )
              ) {
                let file = indexImportFileToWrite[fileName].slice(0, -1);
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
                let file = indexExportFileToWrite[fileName];
                indexToWrite += file;
              }
            }
            indexToWrite = indexToWrite.slice(0, -1) + '};';
            const index = prettier.format(indexToWrite);
            fs.writeFile(
              dirPath + '/api/index.ts',
              index,
              'utf8',
              async () => {}
            );

            for (const fileName in FileToWrite) {
              if (Object.prototype.hasOwnProperty.call(FileToWrite, fileName)) {
                const file = prettier.format(FileToWrite[fileName]);
                fs.writeFile(
                  dirPath + '/api/' + fileName + '.ts',
                  file,
                  'utf8',
                  async () => {
                    return console.log(
                      GREEN,
                      'Apis are Generated in ' +
                        dirPath +
                        '==> /api/' +
                        fileName
                    );
                  }
                );
              }
            }

            console.log(
              GREEN,
              'Models are Generated in ' + dirPath + '/schemas.ts'
            );
          });
        });
      } else {
        return console.log(RED, 'Failed, Swagger object is empty');
      }
    })
    .catch((err: any) => {
      console.log('err: ', err);
    });
};
ChooseAndSync();
