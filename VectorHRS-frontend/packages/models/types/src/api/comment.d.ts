import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
export declare const comment_listFields: {
    name: string;
    in: string;
    description: string;
    required: boolean;
    type: string;
}[];
export declare const comment_list: (data: operations["comment_list"]["parameters"], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["comment_list"]["responses"][200]["schema"]>>;
export declare const comment_createFields: {
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
        news: {
            title: string;
            type: string;
        };
    };
};
export declare const comment_create: (data: definitions["Comment"] | definitions["Comment"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["comment_create"]["responses"][201]["schema"]>>;
export declare const comment_read: (id: string, headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["comment_read"]["responses"][200]["schema"]>>;
export declare const comment_updateFields: {
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
        news: {
            title: string;
            type: string;
        };
    };
};
export declare const comment_update: (id: string, data: definitions["Comment"] | definitions["Comment"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["comment_update"]["responses"][200]["schema"]>>;
export declare const comment_partial_updateFields: {
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
        news: {
            title: string;
            type: string;
        };
    };
};
export declare const comment_partial_update: (id: string, data: definitions["Comment"] | definitions["Comment"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["comment_partial_update"]["responses"][200]["schema"]>>;
export declare const comment_delete: (id: string, headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<any["schema"]>>;
