import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
export declare const personlog_listFields: {
    name: string;
    in: string;
    description: string;
    required: boolean;
    type: string;
}[];
export declare const personlog_list: (data: operations["personlog_list"]["parameters"], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["personlog_list"]["responses"][200]["schema"]>>;
export declare const personlog_createFields: {
    required: string[];
    type: string;
    properties: {
        id: {
            title: string;
            type: string;
            readOnly: boolean;
        };
        description: {
            title: string;
            type: string;
            maxLength: number;
            "x-nullable": boolean;
        };
        stage: {
            title: string;
            type: string;
        };
        person: {
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
export declare const personlog_create: (data: definitions["PersonLog"] | definitions["PersonLog"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["personlog_create"]["responses"][201]["schema"]>>;
export declare const personlog_read: (id: string, headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["personlog_read"]["responses"][200]["schema"]>>;
export declare const personlog_updateFields: {
    required: string[];
    type: string;
    properties: {
        id: {
            title: string;
            type: string;
            readOnly: boolean;
        };
        description: {
            title: string;
            type: string;
            maxLength: number;
            "x-nullable": boolean;
        };
        stage: {
            title: string;
            type: string;
        };
        person: {
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
export declare const personlog_update: (id: string, data: definitions["PersonLog"] | definitions["PersonLog"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["personlog_update"]["responses"][200]["schema"]>>;
export declare const personlog_partial_updateFields: {
    required: string[];
    type: string;
    properties: {
        id: {
            title: string;
            type: string;
            readOnly: boolean;
        };
        description: {
            title: string;
            type: string;
            maxLength: number;
            "x-nullable": boolean;
        };
        stage: {
            title: string;
            type: string;
        };
        person: {
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
export declare const personlog_partial_update: (id: string, data: definitions["PersonLog"] | definitions["PersonLog"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["personlog_partial_update"]["responses"][200]["schema"]>>;
export declare const personlog_delete: (id: string, headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<any["schema"]>>;
