"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const generateResources_1 = tslib_1.__importDefault(require("./modules/generateResources"));
const generateSchemas_1 = tslib_1.__importDefault(require("./modules/generateSchemas"));
(0, generateResources_1.default)("../../packages/resources/src/servers/schema/");
(0, generateSchemas_1.default)("../../packages/resources/src/servers/resources/");
//# sourceMappingURL=index.js.map