import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
export declare const user_listFields: {
    name: string;
    in: string;
    description: string;
    required: boolean;
    type: string;
}[];
export declare const user_list: (data: operations["user_list"]["parameters"], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["user_list"]["responses"][200]["schema"]>>;
export declare const user_createFields: {
    required: string[];
    type: string;
    properties: {
        id: {
            title: string;
            type: string;
            readOnly: boolean;
        };
        email: {
            title: string;
            type: string;
            format: string;
            maxLength: number;
            minLength: number;
        };
        passcode: {
            title: string;
            type: string;
            maxLength: number;
            minLength: number;
        };
        first_name: {
            title: string;
            type: string;
            maxLength: number;
            minLength: number;
        };
        last_name: {
            title: string;
            type: string;
            maxLength: number;
            minLength: number;
        };
        is_active: {
            title: string;
            type: string;
        };
    };
};
export declare const user_create: (data: definitions["User"] | definitions["User"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["user_create"]["responses"][201]["schema"]>>;
export declare const user_read: (id: string, headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["user_read"]["responses"][200]["schema"]>>;
export declare const user_updateFields: {
    required: string[];
    type: string;
    properties: {
        id: {
            title: string;
            type: string;
            readOnly: boolean;
        };
        email: {
            title: string;
            type: string;
            format: string;
            maxLength: number;
            minLength: number;
        };
        passcode: {
            title: string;
            type: string;
            maxLength: number;
            minLength: number;
        };
        first_name: {
            title: string;
            type: string;
            maxLength: number;
            minLength: number;
        };
        last_name: {
            title: string;
            type: string;
            maxLength: number;
            minLength: number;
        };
        is_active: {
            title: string;
            type: string;
        };
    };
};
export declare const user_update: (id: string, data: definitions["User"] | definitions["User"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["user_update"]["responses"][200]["schema"]>>;
export declare const user_partial_updateFields: {
    required: string[];
    type: string;
    properties: {
        id: {
            title: string;
            type: string;
            readOnly: boolean;
        };
        email: {
            title: string;
            type: string;
            format: string;
            maxLength: number;
            minLength: number;
        };
        passcode: {
            title: string;
            type: string;
            maxLength: number;
            minLength: number;
        };
        first_name: {
            title: string;
            type: string;
            maxLength: number;
            minLength: number;
        };
        last_name: {
            title: string;
            type: string;
            maxLength: number;
            minLength: number;
        };
        is_active: {
            title: string;
            type: string;
        };
    };
};
export declare const user_partial_update: (id: string, data: definitions["User"] | definitions["User"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["user_partial_update"]["responses"][200]["schema"]>>;
export declare const user_delete: (id: string, headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<any["schema"]>>;
