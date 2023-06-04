import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
export declare const question_listFields: {
    name: string;
    in: string;
    description: string;
    required: boolean;
    type: string;
}[];
export declare const question_list: (data: operations["question_list"]["parameters"], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["question_list"]["responses"][200]["schema"]>>;
export declare const question_createFields: {
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
        html: {
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
        autor: {
            title: string;
            type: string;
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
export declare const question_create: (data: definitions["Question"] | definitions["Question"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["question_create"]["responses"][201]["schema"]>>;
export declare const question_read: (id: string, headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["question_read"]["responses"][200]["schema"]>>;
export declare const question_updateFields: {
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
        html: {
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
        autor: {
            title: string;
            type: string;
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
export declare const question_update: (id: string, data: definitions["Question"] | definitions["Question"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["question_update"]["responses"][200]["schema"]>>;
export declare const question_partial_updateFields: {
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
        html: {
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
        autor: {
            title: string;
            type: string;
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
export declare const question_partial_update: (id: string, data: definitions["Question"] | definitions["Question"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["question_partial_update"]["responses"][200]["schema"]>>;
export declare const question_delete: (id: string, headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<any["schema"]>>;
