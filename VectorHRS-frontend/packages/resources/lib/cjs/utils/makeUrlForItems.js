"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeUrlForItems = makeUrlForItems;
function makeUrlForItems(resource, options) {
    var url = resource.baseUrl;
    /*This is used for some specific ones like res1/{id}/res2/{id2} */
    if (options && options.url && options.params) {
        options.params.forEach(function (param) {
            url = url.replace("{".concat(param.name, "}"), param.value);
        });
    }
    return url;
}
//# sourceMappingURL=makeUrlForItems.js.map