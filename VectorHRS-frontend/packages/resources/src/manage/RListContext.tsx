import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { ResourceCache } from './DataCache';

interface RListState {
  items: any[] | null;
  ids: any[];
  meta: any | null;
  error: any;
  isLoading: boolean;
  fetchItems: (
    force: boolean,
    RListParams?: any,
    axiosArgs?: any,
    options?: any
  ) => void;
}


const useRListList = ({ resource, params, options, children }) => {
  const [error, setError] = useState<any>(null);
  const [numberOfPendingRequests, setNumberOfPendingRequests] = useState(0);
  const isLoading = numberOfPendingRequests > 0;
  const [data, setData] = useState<{
    items: any[] | null;
    meta: any | null;
    objectIds: any[];
  }>({
    items: null,
    meta: null,
    objectIds: [],
  });
  const [mounted, setMounted] = useState(false);
  const lockFetchRef = useRef(false);

  const fetchItems = async (
    force: boolean,
    RListParams?: any,
    axiosArgs?: any,
    options?: any
  ) => {
    {
      if (typeof force === 'undefined') {
        force = false;
      }

      if (!lockFetchRef.current) {
        lockFetchRef.current = true;
        try {
          setNumberOfPendingRequests((prevCount) => prevCount + 1);

          // Perform the fetch operation here using the provided parameters
          // Update the data state accordingly

          setError(null);
          setMounted(true);
        } catch (error) {
          setError(error);
        } finally {
          setNumberOfPendingRequests((prevCount) => prevCount - 1);
          lockFetchRef.current = false;
        }
      }
    };
  }

  useEffect(() => {
    const getItemsReactive = async () => {
      if (options?.forceFetchOnNavigation && mounted) {
        // On change params always fetch if forceFetchOnNavigation
        await fetchItems(true);
        // Update the location
      }

      if (options?.fetchOnDeclare && !mounted) {
        await fetchItems(options.force, params);
      }

      if (mounted) {
        await fetchItems(options?.force, params);
      }
    };

    getItemsReactive();
  }, [resource, params, options]);

  const RListState: RListState = {
    items: data.items,
    ids: data.objectIds,
    meta: data.meta,
    error,
    isLoading,
    fetchItems,
  };

  return (
    RListState
  );
};

export { useRListList };
