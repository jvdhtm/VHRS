"use strict";
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
 * Sync resources from Swagger docs.
 * @param dest - the destination directory (could be empty).
 */
async function generateResources(dest) {
    if (dest)
        PATH_DIR = dest;
    try {
        console.log("Connecting to " + swaggerDocUrl);
        const res = await axios_1.default.get(swaggerDocUrl);
        const data = res.data;
        if (data) {
            const dirPath = path.resolve(process.cwd(), PATH_DIR);
            if (!fs.existsSync(dirPath)) {
                fs.mkdirSync(dirPath, { recursive: true });
            }
            const definitions = data.definitions;
            const paths = data.paths;
            const FileToWrite = {};
            const indexImportFileToWrite = {};
            const indexExportFileToWrite = {};
            const alreadyCounted = [];
            for (const path in paths) {
                if (Object.prototype.hasOwnProperty.call(paths, path)) {
                    const pathVerbs = paths[path];
                    let fileName = path
                        .replaceAll("/", "_")
                        .replaceAll("{", "")
                        .replaceAll("}", "");
                    let resource = { properties: {} };
                    const relatedPath = [];
                    const modelOb = (0, findResourceModel_1.findResourceModel)(resource, pathVerbs, definitions, fileName);
                    fileName = modelOb.fileName;
                    const definition = modelOb.resourceDefinition;
                    resource = modelOb.resource;
                    if (alreadyCounted.includes(path)) {
                        continue;
                    }
                    for (const secondPath in paths) {
                        if (Object.prototype.hasOwnProperty.call(paths, secondPath)) {
                            if (secondPath.indexOf(path) > -1 ||
                                path.indexOf(secondPath) > -1) {
                                relatedPath.push(secondPath);
                                alreadyCounted.push(secondPath);
                            }
                        }
                    }
                    let chosenPath = relatedPath[0];
                    relatedPath.forEach(function (related) {
                        if (chosenPath.indexOf(related) > 0) {
                            chosenPath = related;
                        }
                    });
                    FileToWrite[fileName] = (0, generateResourceFile_1.generateResourceFile)(resource, definition, chosenPath, relatedPath, fileName);
                    indexImportFileToWrite[fileName] = `import { ${fileName}Resource } from "./${fileName}";\n`;
                    indexExportFileToWrite[fileName] = `${fileName}Resource, `;
                }
            }
            let indexToWrite = "";
            for (const fileName in indexImportFileToWrite) {
                if (Object.prototype.hasOwnProperty.call(indexImportFileToWrite, fileName)) {
                    indexToWrite += indexImportFileToWrite[fileName];
                }
            }
            indexToWrite += "export { ";
            for (const fileName in indexExportFileToWrite) {
                if (Object.prototype.hasOwnProperty.call(indexExportFileToWrite, fileName)) {
                    indexToWrite += indexExportFileToWrite[fileName];
                }
            }
            indexToWrite = indexToWrite.slice(0, -2) + " };"; // Remove trailing comma and space
            const index = await prettier_1.default.format(indexToWrite, Config_1.PRETTIER_CONFIG);
            fs.writeFileSync(path.join(dirPath, "index.ts"), index, "utf8");
            for (const fileName in FileToWrite) {
                if (Object.prototype.hasOwnProperty.call(FileToWrite, fileName)) {
                    let file = await prettier_1.default.format(FileToWrite[fileName], Config_1.PRETTIER_CONFIG);
                    file = file.replaceAll("// prettier-ignore", "");
                    fs.writeFileSync(path.join(dirPath, `${fileName}.ts`), file, "utf8");
                }
            }
        }
        else {
            console.log("Failed, Swagger object is empty");
        }
    }
    catch (err) {
        console.log(err);
    }
}
exports.default = generateResources;
//# sourceMappingURL=generateResources.js.map