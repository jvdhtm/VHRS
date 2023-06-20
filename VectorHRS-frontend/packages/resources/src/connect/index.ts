import axios, { AxiosError, AxiosPromise, Method } from "axios";
import hash from "../manage/hash";


export const instance = axios.create();


export interface RequestType {
    forceNoDedup?: boolean,
    data?: any,
    headers?: any,
    endpoint: string;
    name: string;
    verb: Method | undefined,
}

class DataLayer {

    TIMESTAMP_CACHE: Map<string, number>;
    PROMISE_CACHE: Map<string, AxiosPromise>;
    DEDUP_TIME: number;
    debugMode: boolean

    constructor(debugMode = false) {
        this.TIMESTAMP_CACHE = new Map<string, number>();
        this.PROMISE_CACHE = new Map<string, AxiosPromise>();
        this.DEDUP_TIME = 5000;
        this.debugMode = debugMode;
    }

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

    async requestApi( options:RequestType ): Promise<any> {
        try {

            return await this.dedupRequest(
                hash([options.endpoint, options.headers]),
                () =>
                    instance({
                        method:  options.verb,
                        url:  options.endpoint,
                        params:  options.data ,
                        headers: options.headers,
                    }),
                options.forceNoDedup
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