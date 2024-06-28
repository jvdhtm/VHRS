import { AxiosError, AxiosPromise, Method } from "axios";
export declare const instance: import("axios").AxiosInstance;
export interface RequestType {
    forceNoDedup?: boolean;
    data?: any;
    headers?: any;
    endpoint: string;
    name: string;
    method: Method | undefined;
}
declare class DataLayer {
    TIMESTAMP_CACHE: Map<string, number>;
    PROMISE_CACHE: Map<string, AxiosPromise>;
    DEDUP_TIME: number;
    debugMode: boolean;
    constructor(debugMode?: boolean);
    errorHandling(e: AxiosError): void;
    /**
     * Makes sure every same request only happens once in a certain timespan.
     *  @param key - a unique key for each different request.
     */
    dedupRequest(key: string, reqFn: () => AxiosPromise<any>, force?: boolean): AxiosPromise<any>;
    requestApi(options: RequestType): Promise<any>;
    getFromCatch(key: string, id: string): void;
}
export declare const dataLayerObj: DataLayer;
export {};
