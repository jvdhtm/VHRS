import { MutableRefObject } from 'react';
export declare const ResourceCache: () => {
    get: (resourceName: string, id?: string) => MutableRefObject<any> | undefined;
    set: (resourceName: string, item: any, id?: string) => MutableRefObject<any>;
    remove: (resourceName: string, id: string) => boolean;
};
