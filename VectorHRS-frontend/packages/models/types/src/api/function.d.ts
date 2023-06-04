import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
export declare const function_listFields: {
    name: string;
    in: string;
    description: string;
    required: boolean;
    type: string;
}[];
export declare const function_list: (data: operations["function_list"]["parameters"], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["function_list"]["responses"][200]["schema"]>>;
export declare const function_createFields: {
    required: string[];
    type: string;
    properties: {
        id: {
            title: string;
            type: string;
            readOnly: boolean;
        };
        name: {
            title: string;
            type: string;
            maxLength: number;
            "x-nullable": boolean;
        };
        description: {
            title: string;
            type: string;
            maxLength: number;
            "x-nullable": boolean;
        };
        shape: {
            title: string;
            type: string;
            enum: string[];
        };
        status: {
            title: string;
            type: string;
            enum: string[];
        };
        created_date_time: {
            title: string;
            type: string;
            format: string;
        };
    };
};
export declare const function_create: (data: definitions["Function"] | definitions["Function"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["function_create"]["responses"][201]["schema"]>>;
export declare const function_read: (id: string, headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["function_read"]["responses"][200]["schema"]>>;
export declare const function_updateFields: {
    required: string[];
    type: string;
    properties: {
        id: {
            title: string;
            type: string;
            readOnly: boolean;
        };
        name: {
            title: string;
            type: string;
            maxLength: number;
            "x-nullable": boolean;
        };
        description: {
            title: string;
            type: string;
            maxLength: number;
            "x-nullable": boolean;
        };
        shape: {
            title: string;
            type: string;
            enum: string[];
        };
        status: {
            title: string;
            type: string;
            enum: string[];
        };
        created_date_time: {
            title: string;
            type: string;
            format: string;
        };
    };
};
export declare const function_update: (id: string, data: definitions["Function"] | definitions["Function"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["function_update"]["responses"][200]["schema"]>>;
export declare const function_partial_updateFields: {
    required: string[];
    type: string;
    properties: {
        id: {
            title: string;
            type: string;
            readOnly: boolean;
        };
        name: {
            title: string;
            type: string;
            maxLength: number;
            "x-nullable": boolean;
        };
        description: {
            title: string;
            type: string;
            maxLength: number;
            "x-nullable": boolean;
        };
        shape: {
            title: string;
            type: string;
            enum: string[];
        };
        status: {
            title: string;
            type: string;
            enum: string[];
        };
        created_date_time: {
            title: string;
            type: string;
            format: string;
        };
    };
};
export declare const function_partial_update: (id: string, data: definitions["Function"] | definitions["Function"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["function_partial_update"]["responses"][200]["schema"]>>;
export declare const function_delete: (id: string, headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<any["schema"]>>;
