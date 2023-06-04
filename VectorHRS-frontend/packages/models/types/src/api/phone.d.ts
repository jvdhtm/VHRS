import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
export declare const phone_listFields: {
    name: string;
    in: string;
    description: string;
    required: boolean;
    type: string;
}[];
export declare const phone_list: (data: operations["phone_list"]["parameters"], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["phone_list"]["responses"][200]["schema"]>>;
export declare const phone_createFields: {
    required: string[];
    type: string;
    properties: {
        id: {
            title: string;
            type: string;
            readOnly: boolean;
        };
        person: {
            title: string;
            type: string;
        };
        description: {
            title: string;
            type: string;
            maxLength: number;
            "x-nullable": boolean;
        };
        phoneNumber: {
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
export declare const phone_create: (data: definitions["Phone"] | definitions["Phone"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["phone_create"]["responses"][201]["schema"]>>;
export declare const phone_read: (id: string, headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["phone_read"]["responses"][200]["schema"]>>;
export declare const phone_updateFields: {
    required: string[];
    type: string;
    properties: {
        id: {
            title: string;
            type: string;
            readOnly: boolean;
        };
        person: {
            title: string;
            type: string;
        };
        description: {
            title: string;
            type: string;
            maxLength: number;
            "x-nullable": boolean;
        };
        phoneNumber: {
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
export declare const phone_update: (id: string, data: definitions["Phone"] | definitions["Phone"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["phone_update"]["responses"][200]["schema"]>>;
export declare const phone_partial_updateFields: {
    required: string[];
    type: string;
    properties: {
        id: {
            title: string;
            type: string;
            readOnly: boolean;
        };
        person: {
            title: string;
            type: string;
        };
        description: {
            title: string;
            type: string;
            maxLength: number;
            "x-nullable": boolean;
        };
        phoneNumber: {
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
export declare const phone_partial_update: (id: string, data: definitions["Phone"] | definitions["Phone"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["phone_partial_update"]["responses"][200]["schema"]>>;
export declare const phone_delete: (id: string, headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<any["schema"]>>;
