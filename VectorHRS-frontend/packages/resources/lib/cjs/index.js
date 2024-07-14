"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.instance = exports.dataLayerObj = exports.annotateResource = exports.makeUrlForItems = exports.makeUrlForItem = exports.resources = void 0;
var tslib_1 = require("tslib");
exports.resources = tslib_1.__importStar(require("./servers/resources/index"));
var makeUrlForItem_1 = require("./utils/makeUrlForItem");
Object.defineProperty(exports, "makeUrlForItem", { enumerable: true, get: function () { return makeUrlForItem_1.makeUrlForItem; } });
var makeUrlForItems_1 = require("./utils/makeUrlForItems");
Object.defineProperty(exports, "makeUrlForItems", { enumerable: true, get: function () { return makeUrlForItems_1.makeUrlForItems; } });
var annotateResource_1 = require("./utils/annotateResource");
Object.defineProperty(exports, "annotateResource", { enumerable: true, get: function () { return annotateResource_1.annotateResource; } });
var connect_1 = require("./connect");
Object.defineProperty(exports, "dataLayerObj", { enumerable: true, get: function () { return connect_1.dataLayerObj; } });
Object.defineProperty(exports, "instance", { enumerable: true, get: function () { return connect_1.instance; } });
//# sourceMappingURL=index.js.map