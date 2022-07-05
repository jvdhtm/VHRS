"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.instance = exports.Api = void 0;
var tslib_1 = require("tslib");
var ApiVerbs = tslib_1.__importStar(require("./src/api"));
var instance_1 = require("./src/instance");
Object.defineProperty(exports, "instance", { enumerable: true, get: function () { return instance_1.instance; } });
exports.Api = ApiVerbs;
//# sourceMappingURL=index.js.map