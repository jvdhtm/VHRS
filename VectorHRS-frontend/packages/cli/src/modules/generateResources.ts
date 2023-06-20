/**
 * @author: Javad Hatami
 * Date: 2022-April-27
 * Resources
 */

import axios from "axios";
import * as fs from "fs";
import * as path from "path";
import prettier from "prettier";
import { BASE_URL, PRETTIER_CONFG, SWAGGER_ENDPOINT } from "../constants/Config";
import { generateResourceFile } from "./generateResourceFile";
import { findResourceModel } from "./findResourceModel";

const swaggerDocUrl = `${BASE_URL}/${SWAGGER_ENDPOINT}`;
let PATH_DIR = "";


/**
 * sync resources from swagger docs.
 *  @param dest - the destination directory could empty.
 */
export default async function generateResources(dest?: string): Promise<void> {
  if (dest) PATH_DIR = dest;
  try {
    console.log("connecting to " + swaggerDocUrl)
    const res = await axios({
      method: "GET",
      url: `${swaggerDocUrl}`,
    });
    const data: any = res.data;
    if (data) {
      const dirPath = path.resolve(process.cwd(), PATH_DIR);
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
      }
      const definitions: any = data.definitions;
      const paths: any = data.paths;

      const FileToWrite: any = {};
      const indexImportFileToWrite: any = {};
      const indexExportFileToWrite: any = {};

      const alreadyCounted: any = [];
      /* going through paths  in swagger docs. */
      for (const path in paths) {
        if (Object.prototype.hasOwnProperty.call(paths, path)) {
          const pathVerbs = paths[path];

          /* have the inital name of the file based on the path */
          let fileName = path
            .replaceAll("/", "_")
            .replaceAll("{", "")
            .replaceAll("}", "")

          let resource = { properties: {} };
          const relatedPath: string[] = [];

          const modelOb = findResourceModel(
            resource,
            pathVerbs,
            definitions,
            fileName,
          );

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
              if (
                secondpath.indexOf(path) > -1 ||
                path.indexOf(secondpath) > -1
              ) {
                relatedPath.push(secondpath);
                alreadyCounted.push(secondpath);
              }
            }
          }

          let choosenPath = relatedPath[0];
          relatedPath.forEach(function (related: string) {
            if (choosenPath.indexOf(related) > 0) {
              choosenPath = related;
            }
          });

          /* Write the file with the variables  */
          FileToWrite[fileName] = generateResourceFile(
            resource,
            definition,
            choosenPath,
            relatedPath,
            fileName
          );

          /* Write the index file with the export and imort  */
          indexImportFileToWrite[fileName] = `${fileName}Resource,`;
          indexExportFileToWrite[fileName] = `${fileName}Resource,`;
        }
      }

      let indexToWrite = "";
      for (const fileName in indexImportFileToWrite) {
        if (
          Object.prototype.hasOwnProperty.call(indexImportFileToWrite, fileName)
        ) {
          let file = "import {" + indexImportFileToWrite[fileName].slice(0, -1);
          file += `} from  "./${fileName}";
              `;
          indexToWrite += file;
        }
      }
      indexToWrite += "export {";
      for (const fileName in indexExportFileToWrite) {
        if (
          Object.prototype.hasOwnProperty.call(indexExportFileToWrite, fileName)
        ) {
          const file = indexExportFileToWrite[fileName];
          indexToWrite += file;
        }
      }
      indexToWrite = indexToWrite.slice(0, -1) + "};";
      const index = prettier.format(indexToWrite, PRETTIER_CONFG);

      fs.writeFile(
        dirPath + "/server/index.ts",
        index,
        "utf8",
        async () => {}
      );

      for (const fileName in FileToWrite) {
        if (Object.prototype.hasOwnProperty.call(FileToWrite, fileName)) {
          let file = prettier.format(FileToWrite[fileName], PRETTIER_CONFG);
          file = file.replaceAll("// prettier-ignore", "");

          fs.writeFile(
            dirPath + "/server/" + fileName + ".ts",
            file,
            "utf8",
            async () => {}
          );
        }
      }
    } else {
      return console.log("Failed, Swagger object is empty");
    }
  } catch (err) {
    console.log(err)
  }
}