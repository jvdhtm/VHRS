import type { ResourceObject, ResourceOptions, RequestType } from "@vhrs/resources";
import { makeUrlForItem, makeUrlForItems, dataLayerObj } from "@vhrs/resources";
import { useState } from 'react';
import { useDataCacheState, useDataCacheDispatch } from "../../context/DataCache";

interface UseRItemHook {
  error: any;
  data: any;
  isLoading: boolean;
  fetchItem: (force?: boolean, id?: string) => Promise<any>;
  fetchItems: (force?: boolean) => Promise<any>;
  saveItem: (id: string, newData: any) => Promise<any>;
  createItem: ( newData: any) => Promise<any>;
  deleteItem: (id: string, force?: boolean) => Promise<boolean>;
}

export const useRItem = (resource?: ResourceObject, options?: ResourceOptions): UseRItemHook => {
  const [error, setError] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { get, state } = useDataCacheState();
  const { set, remove } = useDataCacheDispatch();

  const fetchItem = async (force = false, id?: string): Promise<any> => {
    setIsLoading(true);
    try {
      if (!resource) {
        throw new Error('Resource must be provided.');
      }

      if (force || !get(resource.name, id)) {
        const request: RequestType = {
          endpoint: makeUrlForItem(id, resource, options),
          name: "fetchItem",
          method: "get",
        };
        const fetchedData = await dataLayerObj.requestApi(request);
        set(resource.name, fetchedData.result, id);
        return fetchedData;
      } else {
        setIsLoading(false);
        return get(resource.name, id);
      }
    } catch (err: any) {
      setError(err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const fetchItems = async (force = false): Promise<any> => {
    setIsLoading(true);
    try {
      if (!resource) {
        throw new Error('Resource must be provided.');
      }

      if (force || !get(resource.name)) {
        const request: RequestType = {
          endpoint: makeUrlForItems(resource, options),
          name: "fetchItems",
          method: "get",
        };
        const fetchedData = await dataLayerObj.requestApi(request);
        set(resource.name, fetchedData.result);
        return fetchedData;
      } else {
        setIsLoading(false);
        return get(resource.name);
      }
    } catch (err: any) {
      setError(err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const saveItem = async (id: string, newData: any): Promise<any> => {
    setIsLoading(true);
    try {
      if (!resource) {
        throw new Error('Resource must be provided.');
      }

      const request: RequestType = {
        endpoint: makeUrlForItem(id, resource, options),
        name: "saveItem",
        method: "put", // or "post" depending on your API
        data: newData,
      };

      const savedData = await dataLayerObj.requestApi(request);
      set(resource.name, savedData.result, id);
      setError(null);
      return savedData;
    } catch (err: any) {
      setError(err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const deleteItem = async (id: string): Promise<boolean> => {
    setIsLoading(true);
    try {
      if (!resource) {
        throw new Error('Resource must be provided.');
      }

      const request: RequestType = {
        endpoint: makeUrlForItem(id, resource, options),
        name: "deleteItem",
        method: "delete",
      };

      await dataLayerObj.requestApi(request);
      remove(resource.name, id);
      setError(null);
      return true;
    } catch (err) {
      setError(err);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const createItem = async (newData: any): Promise<any> => {
    setIsLoading(true);
    try {
      if (!resource) {
        throw new Error('Resource must be provided.');
      }
      console.log(resource);
      console.log( makeUrlForItems(resource, options));
      const request: RequestType = {
        endpoint: makeUrlForItems(resource, options),
        name: "createItem",
        method: "post",
        data: newData,
      };

      const createdData = await dataLayerObj.requestApi(request);
      set(resource.name, createdData.result);
      setError(null);
      return createdData;
    } catch (err: any) {
      setError(err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    data: resource ? state[resource.name] : null,
    error,
    isLoading,
    fetchItem,
    fetchItems,
    saveItem,
    createItem,
    deleteItem,
  };
};
