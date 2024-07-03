import axios from "axios";
import * as fs from "fs";
import * as path from "path";
import prettier from "prettier";
import { BASE_URL, PRETTIER_CONFIG, SWAGGER_ENDPOINT } from "../constants/Config";
import { generateResourceFile } from "./generateResourceFile";
import { findResourceModel } from "./findResourceModel";

const swaggerDocUrl = `${BASE_URL}/${SWAGGER_ENDPOINT}`;
let PATH_DIR = "";

/**
 * Sync resources from Swagger docs.
 * @param dest - the destination directory (could be empty).
 */
export default async function generateResources(dest?: string): Promise<void> {
  if (dest) PATH_DIR = dest;
  try {
    console.log("Connecting to " + swaggerDocUrl);
    const res = await axios.get(swaggerDocUrl);
    const data = res.data;
    if (data) {
      const dirPath = path.resolve(process.cwd(), PATH_DIR);
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
      const definitions = data.definitions;
      const paths = data.paths;

      const FileToWrite: { [key: string]: string } = {};
      const indexImportFileToWrite: { [key: string]: string } = {};
      const indexExportFileToWrite: { [key: string]: string } = {};

      const alreadyCounted: string[] = [];

      for (const path in paths) {
        if (Object.prototype.hasOwnProperty.call(paths, path)) {
          const pathVerbs = paths[path];
          let fileName = path
            .replaceAll("/", "_")
            .replaceAll("{", "")
            .replaceAll("}", "");

          let resource = { properties: {} };
          const relatedPath: string[] = [];

          const modelOb = findResourceModel(
            resource,
            pathVerbs,
            definitions,
            fileName,
          );

          fileName = modelOb.fileName;
          const definition = modelOb.resourceDefinition;
          resource = modelOb.resource;

          if (alreadyCounted.includes(path)) {
            continue;
          }

          for (const secondPath in paths) {
            if (Object.prototype.hasOwnProperty.call(paths, secondPath)) {
              if (
                secondPath.indexOf(path) > -1 ||
                path.indexOf(secondPath) > -1
              ) {
                relatedPath.push(secondPath);
                alreadyCounted.push(secondPath);
              }
            }
          }

          let chosenPath = relatedPath[0];
          relatedPath.forEach(function (related: string) {
            if (chosenPath.indexOf(related) > 0) {
              chosenPath = related;
            }
          });

          FileToWrite[fileName] = generateResourceFile(
            resource,
            definition,
            chosenPath,
            relatedPath,
            fileName
          );

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

      const index = await prettier.format(indexToWrite, PRETTIER_CONFIG);

      fs.writeFileSync(path.join(dirPath, "index.ts"), index, "utf8");

      for (const fileName in FileToWrite) {
        if (Object.prototype.hasOwnProperty.call(FileToWrite, fileName)) {
          let file = await prettier.format(FileToWrite[fileName], PRETTIER_CONFIG);
          file = file.replaceAll("// prettier-ignore", "");

          fs.writeFileSync(path.join(dirPath, `${fileName}.ts`), file, "utf8");
        }
      }
    } else {
      console.log("Failed, Swagger object is empty");
    }
  } catch (err) {
    console.log(err);
  }
}
