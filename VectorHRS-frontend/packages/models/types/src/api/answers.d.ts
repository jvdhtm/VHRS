import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
export declare const answers_listFields: {
    name: string;
    in: string;
    description: string;
    required: boolean;
    type: string;
}[];
export declare const answers_list: (data: operations["answers_list"]["parameters"], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["answers_list"]["responses"][200]["schema"]>>;
export declare const answers_createFields: {
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
        question: {
            title: string;
            type: string;
        };
    };
};
export declare const answers_create: (data: definitions["answers"] | definitions["answers"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["answers_create"]["responses"][201]["schema"]>>;
export declare const answers_read: (id: string, headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["answers_read"]["responses"][200]["schema"]>>;
export declare const answers_updateFields: {
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
        question: {
            title: string;
            type: string;
        };
    };
};
export declare const answers_update: (id: string, data: definitions["answers"] | definitions["answers"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["answers_update"]["responses"][200]["schema"]>>;
export declare const answers_partial_updateFields: {
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
        question: {
            title: string;
            type: string;
        };
    };
};
export declare const answers_partial_update: (id: string, data: definitions["answers"] | definitions["answers"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["answers_partial_update"]["responses"][200]["schema"]>>;
export declare const answers_delete: (id: string, headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<any["schema"]>>;
