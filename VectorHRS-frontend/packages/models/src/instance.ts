import axios, { AxiosError, AxiosPromise, Method } from "axios";
import hash, { hid } from "./hash";


export const instance = axios.create();


export interface RequestType {
    endpoint: string;
    name: string;
    verb: Method | undefined,
}


export type ItemsCachedType = { [key: string]: Map<number | string, any> };

export class ResourceInternalCache {
    private items: ItemsCachedType = {};

    constructor() {
        this.items = {};
    }

    getAll = (): ItemsCachedType => {
        return this.items;
    };
    get = <T>(resource: RequestType, id?: number | string): T => {
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
    getList = <T>(resource: RequestType): Map<string | number, T> => {
        if (!this.items[resource.name]) {
            this.items[resource.name] = new Map<number | string, T>();
        }
        return this.items[resource.name];
    };

    delete = (resource: RequestType, id: number | string): boolean => {
        if (!this.items[resource.name]) {
            return false;
        } else if (this.items[resource.name].get(id)) {
            return this.items[resource.name].delete(id);
        } else {
            return false;
        }
    };

    set = <T>(resource: RequestType, item: any, id?: number | string): void => {
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

class DataLayer {

    TIMESTAMP_CACHE: Map<string, number>;
    PROMISE_CACHE: Map<string, AxiosPromise>;
    RESOURCE_CACHE: ResourceInternalCache;
    DEDUP_TIME: number;
    debugMode: boolean

    constructor(debugMode = false) {
        this.TIMESTAMP_CACHE = new Map<string, number>();
        this.PROMISE_CACHE = new Map<string, AxiosPromise>();
        this.RESOURCE_CACHE = new ResourceInternalCache();
        this.DEDUP_TIME = 5000;
        this.debugMode = debugMode;
    }

    /**
    * Loging errors.
    *  @param resourceName - a unique name for each different resoruce.
    *  @param e - AxiosError.
    */
    errorHandling(e: AxiosError): void {
        if (this.debugMode) {
            console.log(e);
        }
    }

    /**
     * Makes sure every same request only happens once in a certain timespan.
     *  @param key - a unique key for each different request.
     */
    dedupRequest(
        key: string,
        reqFn: () => AxiosPromise<any>,
        force = false
    ): AxiosPromise<any> {
        let req: AxiosPromise<any>;
        // DEDUP
        const lastRequest = this.TIMESTAMP_CACHE.get(key);
        const lastPromise = this.PROMISE_CACHE.get(key);
        const now = Date.now();
        if (
            !force &&
            lastPromise &&
            lastRequest &&
            now - lastRequest < this.DEDUP_TIME
        ) {
            req = lastPromise;
        } else {
            req = reqFn().catch((error) => {
                throw error;
            });
            this.TIMESTAMP_CACHE.set(key, Date.now());
            this.PROMISE_CACHE.set(key, req);
            // Can clear after 2 seconds
        }

        return req;
    }

    async requestApi(
        Request: RequestType,
        headers: any,
        force: boolean,
        data?: any,
    ): Promise<any> {
        try {

            return await this.dedupRequest(
                hash([Request.endpoint, headers]),
                () =>
                    instance({
                        method: Request.verb,
                        url: Request.endpoint,
                        params: data ? data.query : {},
                        headers,
                    }),
                force
            );
        }
        catch (e) {
            // Throw fieldErrors on POST and PUT?
            this.errorHandling(e as AxiosError<unknown, any>);
        }

    }
    /* TODO */
    getFromCatch(key: string, id: string) {
        if (!key) return
    }

}


export const dataLayerObj = new DataLayer(true)