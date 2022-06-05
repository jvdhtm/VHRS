"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.instance = void 0;
var tslib_1 = require("tslib");
var axios_1 = tslib_1.__importDefault(require("axios"));
exports.instance = axios_1.default.create({
    baseURL: "http://localhost:8080",
});
//# sourceMappingURL=instance.js.map