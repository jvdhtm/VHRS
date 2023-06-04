import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
export declare const stafflog_listFields: {
    name: string;
    in: string;
    description: string;
    required: boolean;
    type: string;
}[];
export declare const stafflog_list: (data: operations["stafflog_list"]["parameters"], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["stafflog_list"]["responses"][200]["schema"]>>;
export declare const stafflog_createFields: {
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
        with_person: {
            title: string;
            type: string;
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
export declare const stafflog_create: (data: definitions["StaffLog"] | definitions["StaffLog"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["stafflog_create"]["responses"][201]["schema"]>>;
export declare const stafflog_read: (id: string, headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["stafflog_read"]["responses"][200]["schema"]>>;
export declare const stafflog_updateFields: {
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
        with_person: {
            title: string;
            type: string;
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
export declare const stafflog_update: (id: string, data: definitions["StaffLog"] | definitions["StaffLog"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["stafflog_update"]["responses"][200]["schema"]>>;
export declare const stafflog_partial_updateFields: {
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
        with_person: {
            title: string;
            type: string;
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
export declare const stafflog_partial_update: (id: string, data: definitions["StaffLog"] | definitions["StaffLog"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["stafflog_partial_update"]["responses"][200]["schema"]>>;
export declare const stafflog_delete: (id: string, headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<any["schema"]>>;
