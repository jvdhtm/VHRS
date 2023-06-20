"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const fs = tslib_1.__importStar(require("fs"));
const openApi = tslib_1.__importStar(require("openapi-typescript"));
const path = tslib_1.__importStar(require("path"));
const Config_1 = require("../constants/Config");
const swaggerDocUrl = `${Config_1.BASE_URL}/${Config_1.SWAGGER_ENDPOINT}`;
const openapiTS = openApi.default;
let PATH_DIR = "";
async function generateSchemas(dest) {
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
            openapiTS(data).then((output) => {
                if (!fs.existsSync(dirPath)) {
                    fs.mkdirSync(dirPath, { recursive: true });
                }
                fs.writeFile(dirPath + "/Models.ts", output, "utf8", () => { });
            });
        }
        else {
            return console.log("Failed, Swagger object is empty");
        }
    }
    catch (err) {
        console.log(err);
    }
}
exports.default = generateSchemas;
//# sourceMappingURL=generateSchemas.js.map