import type { ResourceObject } from "../types";
import { hid } from "./hash";

export type ItemsCachedType = { [key: string]: Map<number | string, any> };
export class ResourceInternalCache {
    private items: ItemsCachedType = {};
  
    constructor() {
      this.items = {};
    }
  
    getAll = (): ItemsCachedType => {
      return this.items;
    };
    get = <T>(resource: ResourceObject, id?: number | string): T => {
      if (!this.items[resource.name]) {
        this.items[resource.name] = new Map<number | string, T>();
      }
  
      if (id) {
        return this.items[resource.name].get(id);
      } else {
        const tempid = hid(resource);
  
        return this.items[resource.name].get(tempid);
      }
    };
    getList = <T>(resourceName: string): Map<string | number, T> => {
      if (!this.items[resourceName]) {
        this.items[resourceName] = new Map<number | string, T>();
      }
  
      return this.items[resourceName];
    };
  
    delete = (resourceName: string, id: number | string): boolean => {
      if (!this.items[resourceName]) {
        return false;
      } else if (this.items[resourceName].get(id)) {
        return this.items[resourceName].delete(id);
      } else {
        return false;
      }
    };

    deleteResource = (resourceName: string): boolean => {
      if (!this.items[resourceName]) {
        return false;
      } else {
        this.items[resourceName] = new Map<number | string, any>();
  
        return true;
      }
    };
  
    set = <T>(
      resource: ResourceObject,
      item: any,
      id?: number | string,
    ): void => {
      if (!this.items[resource.name]) {
        this.items[resource.name] = new Map<number | string, T>();
      }
  
      if (id) {
        this.items[resource.name].set(id, item);
      } else {
        const tempid = hid(resource);
        this.items[resource.name].set(tempid, item);
      }
    };
}
