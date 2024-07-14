import { __assign } from "tslib";
import * as resources from "../servers/resources/index";
import { addContext, addContextToActions } from "./addContext"; // Adjust import path as needed
export var annotateResource = function (resourceKey, annotations) {
    // Ensure resourceKey is a valid key for resources
    if (!(resourceKey in resources)) {
        throw new Error("Resource key '".concat(resourceKey, "' not found in resources."));
    }
    // Retrieve the existing resource
    var resource = resources[resourceKey];
    // Mutate the existing resource directly with the new annotations
    if (annotations.fields) {
        var existingFields = resource.fields; // Adjust type as per your project
        for (var fieldName in annotations.fields) {
            if (Object.prototype.hasOwnProperty.call(annotations.fields, fieldName)) {
                var field = annotations.fields[fieldName];
                if (field === null || field === void 0 ? void 0 : field.display) {
                    var _a = field.display, components = _a.components, ctx = _a.ctx, admissions = _a.admissions;
                    var componentsWithContext = addContext(components, resource);
                    var tempField = existingFields[fieldName];
                    if (existingFields && typeof tempField !== 'undefined') {
                        if (!tempField.display)
                            tempField.display = {};
                        var oldDisplay = tempField.display;
                        tempField.display = __assign(__assign({}, (oldDisplay)), { components: __assign({}, componentsWithContext), ctx: ctx || { resource: resource, props: {} }, admissions: admissions });
                        existingFields[fieldName] = field;
                    }
                }
            }
        }
    }
    if (annotations.display) {
        var _b = annotations.display, components = _b.components, ctx = _b.ctx, admissions = _b.admissions;
        var componentsWithContext = addContext(components, resource);
        resource.display = __assign(__assign({}, resource.display), { components: __assign({}, componentsWithContext), ctx: ctx || { resource: resource, props: {} }, admissions: admissions });
    }
    if (annotations.actions) {
        resource.actions = addContextToActions(annotations.actions, resource);
    }
    return resource;
};
//# sourceMappingURL=annotateResource.js.map