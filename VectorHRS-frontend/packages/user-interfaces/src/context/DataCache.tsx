import { createContext, useContext, useReducer, ReactNode, useCallback } from 'react';
import { hid } from './hash';

interface ItemCache {
  [key: string]: Map<string, any>;
}

interface DataCacheStateContextType {
  state: ItemCache;
  get: (resourceName: string, id?: string) => any | undefined;
}

interface DataCacheDispatchContextType {
  set: (resourceName: string, item: any, id?: string) => void;
  remove: (resourceName: string, id: string) => void;
}

const DataCacheStateContext = createContext<DataCacheStateContextType | undefined>(undefined);
const DataCacheDispatchContext = createContext<DataCacheDispatchContextType | undefined>(undefined);

type Action =
  | { type: 'SET'; resourceName: string; id: string; item: any }
  | { type: 'REMOVE'; resourceName: string; id: string };

const dataCacheReducer = (state: ItemCache, action: Action): ItemCache => {
  switch (action.type) {
    case 'SET': {
      const { resourceName, id, item } = action;
      const resourceCache = state[resourceName] || new Map<string, any>();
      resourceCache.set(id, item);
      return { ...state, [resourceName]: resourceCache };
    }
    case 'REMOVE': {
      const { resourceName, id } = action;
      const resourceCache = state[resourceName];
      if (resourceCache) {
        resourceCache.delete(id);
        if (resourceCache.size === 0) {
          const { [resourceName]: _, ...rest } = state;
          return rest;
        } else {
          return { ...state, [resourceName]: resourceCache };
        }
      }
      return state;
    }
    default:
      return state;
  }
};

const useCreateDataCache = () => {
  const [state, dispatch] = useReducer(dataCacheReducer, {});

  const get = useCallback((resourceName: string, id?: string): any | undefined => {
    if (!id) {
      id = hid(resourceName).toString();
    }
    const resourceCache = state[resourceName];
    return resourceCache ? resourceCache.get(id) : undefined;
  }, [state]);

  const set = useCallback((resourceName: string, item: any, id?: string): void => {
    if (!id) {
      id = hid(resourceName).toString();
    }
    dispatch({ type: 'SET', resourceName, id, item });
  }, []);

  const remove = useCallback((resourceName: string, id: string): void => {
    dispatch({ type: 'REMOVE', resourceName, id });
  }, []);

  return {
    state,
    get,
    set,
    remove,
  };
};



interface DataCacheProviderProps {
  children: ReactNode;
}

export const DataCacheProvider = ({ children }: DataCacheProviderProps) => {

  const globalDataCache = useCreateDataCache();
  return <DataCacheStateContext.Provider value={globalDataCache}>
    <DataCacheDispatchContext.Provider value={globalDataCache}>
      {children}
    </DataCacheDispatchContext.Provider>
  </DataCacheStateContext.Provider>
};

export const useDataCacheState = (): DataCacheStateContextType => {
  const context = useContext(DataCacheStateContext);
  if (!context) {
    throw new Error('useDataCacheState must be used within a DataCacheProvider');
  }
  return context;
};

export const useDataCacheDispatch = (): DataCacheDispatchContextType => {
  const context = useContext(DataCacheDispatchContext);
  if (!context) {
    throw new Error('useDataCacheDispatch must be used within a DataCacheProvider');
  }
  return context;
};
