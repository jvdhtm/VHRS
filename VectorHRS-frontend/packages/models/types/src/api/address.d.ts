import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
export declare const address_listFields: {
    name: string;
    in: string;
    description: string;
    required: boolean;
    type: string;
}[];
export declare const address_list: (data: operations["address_list"]["parameters"], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["address_list"]["responses"][200]["schema"]>>;
export declare const address_createFields: {
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
        address1: {
            title: string;
            type: string;
            maxLength: number;
            "x-nullable": boolean;
        };
        address2: {
            title: string;
            type: string;
            maxLength: number;
            "x-nullable": boolean;
        };
        zip: {
            title: string;
            type: string;
            maxLength: number;
            "x-nullable": boolean;
        };
        city: {
            title: string;
            type: string;
            maxLength: number;
            "x-nullable": boolean;
        };
        country: {
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
export declare const address_create: (data: definitions["Address"] | definitions["Address"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["address_create"]["responses"][201]["schema"]>>;
export declare const address_read: (id: string, headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["address_read"]["responses"][200]["schema"]>>;
export declare const address_updateFields: {
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
        address1: {
            title: string;
            type: string;
            maxLength: number;
            "x-nullable": boolean;
        };
        address2: {
            title: string;
            type: string;
            maxLength: number;
            "x-nullable": boolean;
        };
        zip: {
            title: string;
            type: string;
            maxLength: number;
            "x-nullable": boolean;
        };
        city: {
            title: string;
            type: string;
            maxLength: number;
            "x-nullable": boolean;
        };
        country: {
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
export declare const address_update: (id: string, data: definitions["Address"] | definitions["Address"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["address_update"]["responses"][200]["schema"]>>;
export declare const address_partial_updateFields: {
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
        address1: {
            title: string;
            type: string;
            maxLength: number;
            "x-nullable": boolean;
        };
        address2: {
            title: string;
            type: string;
            maxLength: number;
            "x-nullable": boolean;
        };
        zip: {
            title: string;
            type: string;
            maxLength: number;
            "x-nullable": boolean;
        };
        city: {
            title: string;
            type: string;
            maxLength: number;
            "x-nullable": boolean;
        };
        country: {
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
export declare const address_partial_update: (id: string, data: definitions["Address"] | definitions["Address"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["address_partial_update"]["responses"][200]["schema"]>>;
export declare const address_delete: (id: string, headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<any["schema"]>>;
