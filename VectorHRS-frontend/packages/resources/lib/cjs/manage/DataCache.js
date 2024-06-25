"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceCache = void 0;
var react_1 = require("react");
var hash_1 = require("./hash");
var ResourceCache = function () {
    var items = (0, react_1.useRef)({});
    var get = function (resourceName, id) {
        if (!id) {
            id = (0, hash_1.hid)(resourceName).toString();
        }
        var resourceCache = items.current[resourceName];
        if (resourceCache) {
            var itemRef = resourceCache.get(id);
            if (itemRef) {
                return itemRef;
            }
        }
        return set(resourceName, undefined, id);
    };
    var set = function (resourceName, item, id) {
        var resourceCache = items.current[resourceName];
        var itemRef;
        if (!resourceCache) {
            resourceCache = new Map();
            items.current[resourceName] = resourceCache;
        }
        if (!id) {
            id = (0, hash_1.hid)(resourceName).toString();
        }
        itemRef = resourceCache.get(id);
        if (itemRef) {
            itemRef.current = item; // Update existing item
        }
        else {
            itemRef = (0, react_1.useRef)(item); // Create new item
            resourceCache.set(id, itemRef);
        }
        return itemRef;
    };
    var remove = function (resourceName, id) {
        var resourceCache = items.current[resourceName];
        if (resourceCache) {
            return resourceCache.delete(id);
        }
        return false;
    };
    return {
        get: get,
        set: set,
        remove: remove,
    };
};
exports.ResourceCache = ResourceCache;
//# sourceMappingURL=DataCache.js.map