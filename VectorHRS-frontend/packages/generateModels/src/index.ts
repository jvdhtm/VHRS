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

            let FileToWrite: any = {};
            for (const path in pathsObj) {
              if (Object.prototype.hasOwnProperty.call(pathsObj, path)) {
                const element = pathsObj[path];

                for (const verb in element) {
                  if (Object.prototype.hasOwnProperty.call(element, verb)) {
                    const fileName = element[verb].tags;
                    if (!FileToWrite[fileName]) {
                      FileToWrite[fileName] = '';
                      FileToWrite[fileName] += `
                        import {operations, definitions} from "../Schemas";
                        import axios,{AxiosResponse} from "axios"
                        `;
                    }

                    const functionName = element[verb].operationId;
                    const parameters = element[verb].parameters;
                    let definition = '';
                    let model = '';
                    if (functionName) {
                      if (parameters && parameters.length > 0) {
                        if (parameters[0].in === 'body') {
                          definition = parameters[0].schema.$ref.replace(
                            '#/definitions/',
                            ''
                          );
                          model = `definitions["${definition}"]`;
                        } else {
                          model = `operations["${functionName}"]["parameters"]`;
                        }
                      }

                      FileToWrite[fileName] += `
                    export const ${functionName} = async ( `;
                      if (path.indexOf('{id}') > -1)
                        FileToWrite[fileName] += `id: string,`;
                      if (model) FileToWrite[fileName] += `data: ${model},`;

                      FileToWrite[fileName] += `
                       headers: any ) : Promise<AxiosResponse<operations["${functionName}"]["responses"]>> => {
                        let endpoint = "${path}";`;
                      if (path.indexOf('{id}') > -1)
                        FileToWrite[fileName] += `
                        endpoint = endpoint.replace("{id}", id.toString())`;
                      FileToWrite[fileName] += `
                        return await axios({
                        method: "${verb}",
                        url: endpoint,
                        `;
                      if (model) FileToWrite[fileName] += `data,`;
                      FileToWrite[fileName] += `
                        headers
                      });
  
                    }
                    `;
                    }
                  }
                }
              }
            }

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
