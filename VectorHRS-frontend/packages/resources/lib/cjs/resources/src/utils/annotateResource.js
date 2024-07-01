"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.annotateResource = void 0;
var tslib_1 = require("tslib");
var resources = tslib_1.__importStar(require("../servers/resources/index"));
/**
 * Utility function to annotate a resource with new annotations
 * @param resourceKey - The key of the resource to be annotated
 * @param annotations - The new annotations to merge into the resource
 * @returns - The annotated resource object
 */
var annotateResource = function (resourceKey, annotations) {
    // Retrieve the existing resource
    var resource = resources[resourceKey];
    // Merge the new annotations into the existing resource
    var annotatedResource = tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, resource), annotations), { fields: tslib_1.__assign(tslib_1.__assign({}, resource.fields), annotations.fields), display: tslib_1.__assign(tslib_1.__assign({}, resource.display), annotations.display), actions: tslib_1.__spreadArray(tslib_1.__spreadArray([], (resource.actions || []), true), (annotations.actions || []), true) });
    return annotatedResource;
};
exports.annotateResource = annotateResource;
//# sourceMappingURL=annotateResource.js.map