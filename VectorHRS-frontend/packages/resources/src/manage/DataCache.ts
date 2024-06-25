import { useRef, MutableRefObject } from 'react';
import { hid } from './hash';

interface ItemCache {
  [key: string]: Map<string, MutableRefObject<any>>;
}

export const ResourceCache = () => {
  const items = useRef<ItemCache>({});

  const get = (resourceName: string, id?: string): MutableRefObject<any> | undefined => {
    if (!id) {
      id = hid(resourceName).toString();
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

  const set = (resourceName: string, item: any, id?: string): MutableRefObject<any> => {
    let resourceCache = items.current[resourceName];
    let itemRef;

    if (!resourceCache) {
      resourceCache = new Map();
      items.current[resourceName] = resourceCache;
    }

    if (!id ) {
      id = hid(resourceName).toString();
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

  const remove = (resourceName: string, id: string): boolean => {
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

