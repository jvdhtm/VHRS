import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
export declare const newsletter_listFields: {
    name: string;
    in: string;
    description: string;
    required: boolean;
    type: string;
}[];
export declare const newsletter_list: (data: operations["newsletter_list"]["parameters"], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["newsletter_list"]["responses"][200]["schema"]>>;
export declare const newsletter_createFields: {
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
    };
};
export declare const newsletter_create: (data: definitions["NewsLetter"] | definitions["NewsLetter"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["newsletter_create"]["responses"][201]["schema"]>>;
export declare const newsletter_read: (id: string, headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["newsletter_read"]["responses"][200]["schema"]>>;
export declare const newsletter_updateFields: {
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
    };
};
export declare const newsletter_update: (id: string, data: definitions["NewsLetter"] | definitions["NewsLetter"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["newsletter_update"]["responses"][200]["schema"]>>;
export declare const newsletter_partial_updateFields: {
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
    };
};
export declare const newsletter_partial_update: (id: string, data: definitions["NewsLetter"] | definitions["NewsLetter"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["newsletter_partial_update"]["responses"][200]["schema"]>>;
export declare const newsletter_delete: (id: string, headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<any["schema"]>>;
