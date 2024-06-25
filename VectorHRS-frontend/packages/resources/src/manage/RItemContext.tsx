import { useState, useEffect } from "react";
import { dataLayerObj, RequestType } from "../connect";
import type { ResourceKeys, ResourceObject, ResourceOptions } from "../types";
import * as resources from "../servers/resources/index";
import { makeUrlForItem } from "../utils/makeUrlForItem";
import { ResourceCache } from "./DataCache";

// Create a React Context for the resource item
interface RItemContextValue {
  data: any;
  error: any;
  isLoading: boolean;
  fetchItem: (force?: boolean) => Promise<any>;
  deleteItem: (options?: any) => Promise<boolean>;
  saveItem: (newData: any, options?: any) => Promise<boolean>;
}

interface RItemProvider {
  resourceName: ResourceKeys;
  id?: number;
  options?: ResourceOptions;
}

export const rItemProvider = ({ resourceName, id, options }: RItemProvider) => {
  const resource: ResourceObject = resources[resourceName];
  const resourceCache = ResourceCache();
  const [data, setData] = useState<any>([]);
  const [error, setError] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    const getItemsReactive = async () => {
      setIsLoading(true);
      if (options?.forceFetchOnNavigation && mounted) {
        // On change params always fetch if forceFetchOnNavigation
        await fetchItem(true);
        // Update the location
      }

      if (options?.fetchOnDeclare && !mounted) {
        await fetchItem(options.force);
      }

      if (mounted) {
        await fetchItem(options?.force);
      }
      setIsLoading(false);
      setMounted(true);
    };

    getItemsReactive();
  }, [resource, id, options]);

  const fetchItem = async (force = false): Promise<any> => {
    if (force) {
      const request: RequestType = {
        endpoint: makeUrlForItem(id, options),
        name: "condition",
        method: "get",
      };
      try {
        const fetchedData = await dataLayerObj.requestApi(request);
        setData(fetchedData.result);
        resourceCache.set(resourceName, fetchedData.result, id);
      } catch (err: any) {
        setError(err);
      }
    } else {
      const fetchedData = resourceCache.get(resourceName, id);
      setData(fetchedData);
    }
  };

  const deleteItem = async (): Promise<boolean> => {

    const request: RequestType = {
      endpoint: makeUrlForItem(id, options),
      name: "condition",
      method: "delete",
    };
    try {
       await dataLayerObj.requestApi(request);
       resourceCache.remove(resourceName, id);
    } catch (err: any) {
      setError(err);
    }
  
    return true;
  };

  const saveItem = async (newData: any, options?: any): Promise<boolean> => {
    // Implement the saveItem logic here
    // You can use the provided options and other variables as needed

    // Example implementation:
    await fetch(`/api/resource/${id}`, {
      method: "PUT",
      body: JSON.stringify(newData),
    });
    return true;
  };

  const RItemContextValue: RItemContextValue = {
    data,
    error,
    isLoading,
    fetchItem,
    deleteItem,
    saveItem,
  };

  return RItemContextValue;
};
