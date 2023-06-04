import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
export declare const role_listFields: {
    name: string;
    in: string;
    description: string;
    required: boolean;
    type: string;
}[];
export declare const role_list: (data: operations["role_list"]["parameters"], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["role_list"]["responses"][200]["schema"]>>;
export declare const role_createFields: {
    required: string[];
    type: string;
    properties: {
        id: {
            title: string;
            type: string;
            readOnly: boolean;
        };
        title: {
            title: string;
            type: string;
            maxLength: number;
            minLength: number;
        };
        user: {
            title: string;
            type: string;
        };
        permission: {
            title: string;
            type: string;
            enum: string[];
        };
        app: {
            title: string;
            type: string;
        };
    };
};
export declare const role_create: (data: definitions["Role"] | definitions["Role"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["role_create"]["responses"][201]["schema"]>>;
export declare const role_read: (id: string, headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["role_read"]["responses"][200]["schema"]>>;
export declare const role_updateFields: {
    required: string[];
    type: string;
    properties: {
        id: {
            title: string;
            type: string;
            readOnly: boolean;
        };
        title: {
            title: string;
            type: string;
            maxLength: number;
            minLength: number;
        };
        user: {
            title: string;
            type: string;
        };
        permission: {
            title: string;
            type: string;
            enum: string[];
        };
        app: {
            title: string;
            type: string;
        };
    };
};
export declare const role_update: (id: string, data: definitions["Role"] | definitions["Role"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["role_update"]["responses"][200]["schema"]>>;
export declare const role_partial_updateFields: {
    required: string[];
    type: string;
    properties: {
        id: {
            title: string;
            type: string;
            readOnly: boolean;
        };
        title: {
            title: string;
            type: string;
            maxLength: number;
            minLength: number;
        };
        user: {
            title: string;
            type: string;
        };
        permission: {
            title: string;
            type: string;
            enum: string[];
        };
        app: {
            title: string;
            type: string;
        };
    };
};
export declare const role_partial_update: (id: string, data: definitions["Role"] | definitions["Role"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["role_partial_update"]["responses"][200]["schema"]>>;
export declare const role_delete: (id: string, headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<any["schema"]>>;
