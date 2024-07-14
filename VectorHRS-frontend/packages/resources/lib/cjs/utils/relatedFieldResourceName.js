"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.relatedFieldResourceName = void 0;
var relatedFieldResourceName = function (resourceField) {
    var _a;
    var relatedResourceType = resourceField === null || resourceField === void 0 ? void 0 : resourceField.type;
    var relatedResourceName;
    if (relatedResourceType === 'array') {
        if (resourceField === null || resourceField === void 0 ? void 0 : resourceField.relatedResource) {
            relatedResourceName = resourceField === null || resourceField === void 0 ? void 0 : resourceField.relatedResource;
        }
        else {
            relatedResourceName = (_a = resourceField === null || resourceField === void 0 ? void 0 : resourceField.items) === null || _a === void 0 ? void 0 : _a.relatedResource;
        }
    }
    else if (relatedResourceType === 'integer') {
        relatedResourceName = resourceField === null || resourceField === void 0 ? void 0 : resourceField.relatedResource;
    }
    if (resourceField && relatedResourceName) {
        var model = relatedResourceName === null || relatedResourceName === void 0 ? void 0 : relatedResourceName.split('.');
        if (model) {
            return model[model.length - 1] + 'Resource';
        }
        return '';
    }
    return '';
};
exports.relatedFieldResourceName = relatedFieldResourceName;
//# sourceMappingURL=relatedFieldResourceName.js.map