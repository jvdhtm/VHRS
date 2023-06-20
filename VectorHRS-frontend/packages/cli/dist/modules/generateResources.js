"use strict";
/**
 * @author: Javad Hatami
 * Date: 2022-April-27
 * Resources
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const fs = tslib_1.__importStar(require("fs"));
const path = tslib_1.__importStar(require("path"));
const prettier_1 = tslib_1.__importDefault(require("prettier"));
const Config_1 = require("../constants/Config");
const generateResourceFile_1 = require("./generateResourceFile");
const findResourceModel_1 = require("./findResourceModel");
const swaggerDocUrl = `${Config_1.BASE_URL}/${Config_1.SWAGGER_ENDPOINT}`;
let PATH_DIR = "";
/**
 * sync resources from swagger docs.
 *  @param dest - the destination directory could empty.
 */
async function generateResources(dest) {
    if (dest)
        PATH_DIR = dest;
    try {
        console.log("connecting to " + swaggerDocUrl);
        const res = await (0, axios_1.default)({
            method: "GET",
            url: `${swaggerDocUrl}`,
        });
        const data = res.data;
        if (data) {
            const dirPath = path.resolve(process.cwd(), PATH_DIR);
            if (!fs.existsSync(dirPath)) {
                fs.mkdirSync(dirPath);
            }
            const definitions = data.definitions;
            const paths = data.paths;
            const FileToWrite = {};
            const indexImportFileToWrite = {};
            const indexExportFileToWrite = {};
            const alreadyCounted = [];
            /* going through paths  in swagger docs. */
            for (const path in paths) {
                if (Object.prototype.hasOwnProperty.call(paths, path)) {
                    const pathVerbs = paths[path];
                    /* have the inital name of the file based on the path */
                    let fileName = path
                        .replaceAll("/", "_")
                        .replaceAll("{", "")
                        .replaceAll("}", "");
                    let resource = { properties: {} };
                    const relatedPath = [];
                    const modelOb = (0, findResourceModel_1.findResourceModel)(resource, pathVerbs, definitions, fileName);
                    /* If we found a model associated with the path change file name */
                    fileName = modelOb.fileName;
                    const definition = modelOb.resourceDefinition;
                    resource = modelOb.resource;
                    /* If path is part of the related path of previous iteration ignore */
                    if (alreadyCounted.includes(path)) {
                        continue;
                    }
                    /* If find related paths */
                    for (const secondpath in paths) {
                        if (Object.prototype.hasOwnProperty.call(paths, secondpath)) {
                            if (secondpath.indexOf(path) > -1 ||
                                path.indexOf(secondpath) > -1) {
                                relatedPath.push(secondpath);
                                alreadyCounted.push(secondpath);
                            }
                        }
                    }
                    let choosenPath = relatedPath[0];
                    relatedPath.forEach(function (related) {
                        if (choosenPath.indexOf(related) > 0) {
                            choosenPath = related;
                        }
                    });
                    /* Write the file with the variables  */
                    FileToWrite[fileName] = (0, generateResourceFile_1.generateResourceFile)(resource, definition, choosenPath, relatedPath, fileName);
                    /* Write the index file with the export and imort  */
                    indexImportFileToWrite[fileName] = `${fileName}Resource,`;
                    indexExportFileToWrite[fileName] = `${fileName}Resource,`;
                }
            }
            let indexToWrite = "";
            for (const fileName in indexImportFileToWrite) {
                if (Object.prototype.hasOwnProperty.call(indexImportFileToWrite, fileName)) {
                    let file = "import {" + indexImportFileToWrite[fileName].slice(0, -1);
                    file += `} from  "./${fileName}";
              `;
                    indexToWrite += file;
                }
            }
            indexToWrite += "export {";
            for (const fileName in indexExportFileToWrite) {
                if (Object.prototype.hasOwnProperty.call(indexExportFileToWrite, fileName)) {
                    const file = indexExportFileToWrite[fileName];
                    indexToWrite += file;
                }
            }
            indexToWrite = indexToWrite.slice(0, -1) + "};";
            const index = prettier_1.default.format(indexToWrite, Config_1.PRETTIER_CONFG);
            fs.writeFile(dirPath + "/server/index.ts", index, "utf8", async () => { });
            for (const fileName in FileToWrite) {
                if (Object.prototype.hasOwnProperty.call(FileToWrite, fileName)) {
                    let file = prettier_1.default.format(FileToWrite[fileName], Config_1.PRETTIER_CONFG);
                    file = file.replaceAll("// prettier-ignore", "");
                    fs.writeFile(dirPath + "/server/" + fileName + ".ts", file, "utf8", async () => { });
                }
            }
        }
        else {
            return console.log("Failed, Swagger object is empty");
        }
    }
    catch (err) {
        console.log(err);
    }
}
exports.default = generateResources;
//# sourceMappingURL=generateResources.js.map