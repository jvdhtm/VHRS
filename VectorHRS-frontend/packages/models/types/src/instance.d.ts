import { AxiosError, AxiosPromise, Method } from "axios";
export declare const instance: import("axios").AxiosInstance;
export interface RequestType {
    endpoint: string;
    name: string;
    verb: Method | undefined;
}
export declare type ItemsCachedType = {
    [key: string]: Map<number | string, any>;
};
export declare class ResourceInternalCache {
    private items;
    constructor();
    getAll: () => ItemsCachedType;
    get: <T>(resource: RequestType, id?: number | string) => T;
    getList: <T>(resource: RequestType) => Map<string | number, T>;
    delete: (resource: RequestType, id: number | string) => boolean;
    set: <T>(resource: RequestType, item: any, id?: number | string) => void;
}
declare class DataLayer {
    TIMESTAMP_CACHE: Map<string, number>;
    PROMISE_CACHE: Map<string, AxiosPromise>;
    RESOURCE_CACHE: ResourceInternalCache;
    DEDUP_TIME: number;
    debugMode: boolean;
    constructor(debugMode?: boolean);
    /**
    * Loging errors.
    *  @param resourceName - a unique name for each different resoruce.
    *  @param e - AxiosError.
    */
    errorHandling(e: AxiosError): void;
    /**
     * Makes sure every same request only happens once in a certain timespan.
     *  @param key - a unique key for each different request.
     */
    dedupRequest(key: string, reqFn: () => AxiosPromise<any>, force?: boolean): AxiosPromise<any>;
    requestApi(Request: RequestType, headers: any, force: boolean, data?: any): Promise<any>;
    getFromCatch(key: string, id: string): void;
}
export declare const dataLayerObj: DataLayer;
export {};
