import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
export declare const department_listFields: {
    name: string;
    in: string;
    description: string;
    required: boolean;
    type: string;
}[];
export declare const department_list: (data: operations["department_list"]["parameters"], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["department_list"]["responses"][200]["schema"]>>;
export declare const department_createFields: {
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
        parentId: {
            title: string;
            type: string;
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
export declare const department_create: (data: definitions["Department"] | definitions["Department"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["department_create"]["responses"][201]["schema"]>>;
export declare const department_read: (id: string, headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["department_read"]["responses"][200]["schema"]>>;
export declare const department_updateFields: {
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
        parentId: {
            title: string;
            type: string;
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
export declare const department_update: (id: string, data: definitions["Department"] | definitions["Department"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["department_update"]["responses"][200]["schema"]>>;
export declare const department_partial_updateFields: {
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
        parentId: {
            title: string;
            type: string;
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
export declare const department_partial_update: (id: string, data: definitions["Department"] | definitions["Department"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["department_partial_update"]["responses"][200]["schema"]>>;
export declare const department_delete: (id: string, headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<any["schema"]>>;
