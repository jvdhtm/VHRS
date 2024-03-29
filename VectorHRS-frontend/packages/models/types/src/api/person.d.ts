import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
export declare const person_listFields: {
    name: string;
    in: string;
    description: string;
    required: boolean;
    type: string;
}[];
export declare const person_list: (data: operations["person_list"]["parameters"], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["person_list"]["responses"][200]["schema"]>>;
export declare const person_createFields: {
    required: string[];
    type: string;
    properties: {
        id: {
            title: string;
            type: string;
            readOnly: boolean;
        };
        firstname: {
            title: string;
            type: string;
            maxLength: number;
            "x-nullable": boolean;
        };
        lastname: {
            title: string;
            type: string;
            maxLength: number;
            "x-nullable": boolean;
        };
        age: {
            title: string;
            type: string;
        };
        nationalId: {
            title: string;
            type: string;
            maxLength: number;
            "x-nullable": boolean;
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
export declare const person_create: (data: definitions["Person"] | definitions["Person"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["person_create"]["responses"][201]["schema"]>>;
export declare const person_read: (id: string, headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["person_read"]["responses"][200]["schema"]>>;
export declare const person_updateFields: {
    required: string[];
    type: string;
    properties: {
        id: {
            title: string;
            type: string;
            readOnly: boolean;
        };
        firstname: {
            title: string;
            type: string;
            maxLength: number;
            "x-nullable": boolean;
        };
        lastname: {
            title: string;
            type: string;
            maxLength: number;
            "x-nullable": boolean;
        };
        age: {
            title: string;
            type: string;
        };
        nationalId: {
            title: string;
            type: string;
            maxLength: number;
            "x-nullable": boolean;
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
export declare const person_update: (id: string, data: definitions["Person"] | definitions["Person"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["person_update"]["responses"][200]["schema"]>>;
export declare const person_partial_updateFields: {
    required: string[];
    type: string;
    properties: {
        id: {
            title: string;
            type: string;
            readOnly: boolean;
        };
        firstname: {
            title: string;
            type: string;
            maxLength: number;
            "x-nullable": boolean;
        };
        lastname: {
            title: string;
            type: string;
            maxLength: number;
            "x-nullable": boolean;
        };
        age: {
            title: string;
            type: string;
        };
        nationalId: {
            title: string;
            type: string;
            maxLength: number;
            "x-nullable": boolean;
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
export declare const person_partial_update: (id: string, data: definitions["Person"] | definitions["Person"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["person_partial_update"]["responses"][200]["schema"]>>;
export declare const person_delete: (id: string, headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<any["schema"]>>;
