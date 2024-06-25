import { useRef } from 'react';
import { hid } from './hash';

export const ResourceCache = () => {
  const items = useRef({});

  const get = (resourceName, id) => {
    if (!id && resourceName) {
      id = hid(resourceName);
    }

    const resourceCache = items.current[resourceName];

    if (resourceCache) {
      const itemRef = resourceCache.get(id);
      if (itemRef) {
        return itemRef;
      }
    }

    return set(resourceName, undefined, id);
  };

  const set = (resourceName, item, id) => {
    let resourceCache = items.current[resourceName];
    let itemRef;

    if (!resourceCache) {
      resourceCache = new Map();
      items.current[resourceName] = resourceCache;
    }

    itemRef = resourceCache.get(id);

    if (itemRef) {
      itemRef.current = item; // Update existing item
    } else {
      itemRef = useRef(item); // Create new item
      resourceCache.set(id, itemRef);
    }

    return itemRef;
  };

  const remove = (resourceName, id) => {
    const resourceCache = items.current[resourceName];

    if (resourceCache) {
      return resourceCache.delete(id);
    }

    return false;
  };

  return {
    get,
    set,
    remove,
  };
};

