import { __assign, __spreadArray } from "tslib";
import * as resources from "../servers/resources/index";
/**
 * Utility function to annotate a resource with new annotations
 * @param resourceKey - The key of the resource to be annotated
 * @param annotations - The new annotations to merge into the resource
 * @returns - The annotated resource object
 */
export var annotateResource = function (resourceKey, annotations) {
    // Retrieve the existing resource
    var resource = resources[resourceKey];
    // Merge the new annotations into the existing resource
    var annotatedResource = __assign(__assign(__assign({}, resource), annotations), { fields: __assign(__assign({}, resource.fields), annotations.fields), display: __assign(__assign({}, resource.display), annotations.display), actions: __spreadArray(__spreadArray([], (resource.actions || []), true), (annotations.actions || []), true) });
    return annotatedResource;
};
//# sourceMappingURL=annotateResource.js.map