"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChooseAndSync = void 0;
const tslib_1 = require("tslib");
const openApi = tslib_1.__importStar(require("openapi-typescript"));
const prettier_1 = tslib_1.__importDefault(require("prettier"));
const Config_1 = require("./constants/Config");
const fs = tslib_1.__importStar(require("fs"));
const path = tslib_1.__importStar(require("path"));
const axios_1 = tslib_1.__importDefault(require("axios"));
const swaggerDocUrl = `${Config_1.BASE_URL}/${Config_1.SWAGGER_ENDPOINT}`;
const openapiTS = openApi.default;
const GREEN = '\x1b[32m';
const RED = '\x1b[41m';
const PATH_DIR = '../../models/src/';
const ChooseAndSync = () => {
    (0, axios_1.default)({
        method: 'GET',
        url: `${swaggerDocUrl}`
    })
        .then((swaggerDoc) => {
        if (swaggerDoc.data) {
            console.log(GREEN, 'Generating the models ...');
            const dirPath = path.resolve(__dirname, PATH_DIR);
            openapiTS(swaggerDoc.data).then((output) => {
                if (!fs.existsSync(dirPath)) {
                    fs.mkdirSync(dirPath);
                }
                fs.writeFile(dirPath + '/schemas.ts', output, 'utf8', async () => {
                    const pathsObj = swaggerDoc.data.paths;
                    const definitions = swaggerDoc.data.definitions;
                    let FileToWrite = {};
                    let indexImportFileToWrite = {};
                    let indexExportFileToWrite = {};
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
                                    let fields = '';
                                    if (parameters && parameters.length > 0) {
                                        if (parameters[0].in === 'body') {
                                            definition = parameters[0].schema.$ref.replace('#/definitions/', '');
                                            model = `definitions["${definition}"] | definitions["${definition}"][]`;
                                            fields = JSON.stringify(definitions[definition]);
                                        }
                                        else {
                                            model = `operations["${functionName}"]["parameters"]`;
                                            fields = JSON.stringify(parameters);
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
                                        if (fields !== '') {
                                            indexImportFileToWrite[fileName] += functionName + `,${functionName}Fields,`;
                                            indexExportFileToWrite[fileName] += functionName + `,${functionName}Fields,`;
                                            FileToWrite[fileName] += `
                        export const ${functionName}Fields = ${fields};
                        `;
                                        }
                                        else {
                                            indexImportFileToWrite[fileName] += functionName + `,`;
                                            indexExportFileToWrite[fileName] += functionName + `,`;
                                        }
                                        FileToWrite[fileName] += `
                    export const ${functionName} = async ( `;
                                        if (path.indexOf('{id}') > -1)
                                            FileToWrite[fileName] += `id: string,`;
                                        if (model)
                                            FileToWrite[fileName] += `data: ${model},`;
                                        let response = `operations["${functionName}"]["responses"]`;
                                        if (verb === 'get' || verb === 'put' || verb === 'patch')
                                            response += '[200]';
                                        if (verb === 'post')
                                            response += '[201]';
                                        if (verb === 'delete')
                                            response = 'any';
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
                                        if (verb === 'get') {
                                            FileToWrite[fileName] += `
                          return await dataLayerObj.requestApi(
                          request,
                          headers,
                          force,
                          `;
                                            if (model)
                                                FileToWrite[fileName] += `data.query`;
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
                                            if (model)
                                                FileToWrite[fileName] += `data`;
                                            FileToWrite[fileName] += `
                          );`;
                                        }
                                        else {
                                            FileToWrite[fileName] += `
                          return dataLayerObj.requestApi(
                          request,
                          headers,
                          force,
                          `;
                                            if (model)
                                                FileToWrite[fileName] += `data`;
                                            FileToWrite[fileName] += `
                          );`;
                                        }
                                        FileToWrite[fileName] += `}`;
                                    }
                                }
                            }
                        }
                    }
                    let indexToWrite = '';
                    for (const fileName in indexImportFileToWrite) {
                        if (Object.prototype.hasOwnProperty.call(indexImportFileToWrite, fileName)) {
                            let file = indexImportFileToWrite[fileName].slice(0, -1);
                            file += `} from  "./${fileName}";
                `;
                            indexToWrite += file;
                        }
                    }
                    indexToWrite += 'export {';
                    for (const fileName in indexExportFileToWrite) {
                        if (Object.prototype.hasOwnProperty.call(indexExportFileToWrite, fileName)) {
                            let file = indexExportFileToWrite[fileName];
                            indexToWrite += file;
                        }
                    }
                    indexToWrite = indexToWrite.slice(0, -1) + '};';
                    const index = prettier_1.default.format(indexToWrite);
                    fs.writeFile(dirPath + '/api/index.ts', index, 'utf8', async () => { });
                    for (const fileName in FileToWrite) {
                        if (Object.prototype.hasOwnProperty.call(FileToWrite, fileName)) {
                            const file = prettier_1.default.format(FileToWrite[fileName]);
                            fs.writeFile(dirPath + '/api/' + fileName + '.ts', file, 'utf8', async () => {
                                return console.log(GREEN, 'Apis are Generated in ' +
                                    dirPath +
                                    '==> /api/' +
                                    fileName);
                            });
                        }
                    }
                    console.log(GREEN, 'Models are Generated in ' + dirPath + '/schemas.ts');
                });
            });
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