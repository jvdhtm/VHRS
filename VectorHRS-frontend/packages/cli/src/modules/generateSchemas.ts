import axios from "axios";
import * as fs from "fs";
import * as openApi from "openapi-typescript";
import * as path from "path";
import { BASE_URL, SWAGGER_ENDPOINT } from "../constants/Config";

const swaggerDocUrl = `${BASE_URL}/${SWAGGER_ENDPOINT}`;

const openapiTS = openApi.default;

let PATH_DIR = "";

export default async function generateSchemas(dest?: string): Promise<void> {
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
      openapiTS(data).then((output: string) => {
        if (!fs.existsSync(dirPath)) {
          fs.mkdirSync(dirPath, { recursive: true });
        }
        fs.writeFile(dirPath + "/Models.ts", output, "utf8", () => {});
      });
    } else {
      return console.log("Failed, Swagger object is empty");
    }
  } catch (err) {
    console.log(err)
  }
}
