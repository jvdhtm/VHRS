import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
export declare const staffcomment_listFields: {
    name: string;
    in: string;
    description: string;
    required: boolean;
    type: string;
}[];
export declare const staffcomment_list: (data: operations["staffcomment_list"]["parameters"], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["staffcomment_list"]["responses"][200]["schema"]>>;
export declare const staffcomment_createFields: {
    required: string[];
    type: string;
    properties: {
        id: {
            title: string;
            type: string;
            readOnly: boolean;
        };
        staff: {
            title: string;
            type: string;
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
export declare const staffcomment_create: (data: definitions["StaffComment"] | definitions["StaffComment"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["staffcomment_create"]["responses"][201]["schema"]>>;
export declare const staffcomment_read: (id: string, headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["staffcomment_read"]["responses"][200]["schema"]>>;
export declare const staffcomment_updateFields: {
    required: string[];
    type: string;
    properties: {
        id: {
            title: string;
            type: string;
            readOnly: boolean;
        };
        staff: {
            title: string;
            type: string;
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
export declare const staffcomment_update: (id: string, data: definitions["StaffComment"] | definitions["StaffComment"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["staffcomment_update"]["responses"][200]["schema"]>>;
export declare const staffcomment_partial_updateFields: {
    required: string[];
    type: string;
    properties: {
        id: {
            title: string;
            type: string;
            readOnly: boolean;
        };
        staff: {
            title: string;
            type: string;
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
export declare const staffcomment_partial_update: (id: string, data: definitions["StaffComment"] | definitions["StaffComment"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["staffcomment_partial_update"]["responses"][200]["schema"]>>;
export declare const staffcomment_delete: (id: string, headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<any["schema"]>>;
