import { useRef } from 'react';
import { hid } from './hash';
export var ResourceCache = function () {
    var items = useRef({});
    var get = function (resourceName, id) {
        if (!id) {
            id = hid(resourceName).toString();
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
            id = hid(resourceName).toString();
        }
        itemRef = resourceCache.get(id);
        if (itemRef) {
            itemRef.current = item; // Update existing item
        }
        else {
            itemRef = useRef(item); // Create new item
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
//# sourceMappingURL=DataCache.js.map