"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeUrlForItem = void 0;
function makeUrlForItem(itemId, resource, options) {
    if (!itemId) {
        return resource.baseUrl;
    }
    var url = resource.baseUrl + itemId;
    if (options && options.url) {
        url = options.url + itemId;
    }
    /*This is used for some specific ones like res1/{id}/res2/{id2} */
    if (options && options.url && options.params) {
        options.params.forEach(function (param) {
            url = url.replace("{".concat(param.name, "}"), param.value);
        });
    }
    return url;
}
exports.makeUrlForItem = makeUrlForItem;
//# sourceMappingURL=makeUrlForItem.js.map