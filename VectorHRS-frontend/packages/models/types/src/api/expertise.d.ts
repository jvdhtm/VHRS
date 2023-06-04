import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
export declare const expertise_listFields: {
    name: string;
    in: string;
    description: string;
    required: boolean;
    type: string;
}[];
export declare const expertise_list: (data: operations["expertise_list"]["parameters"], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["expertise_list"]["responses"][200]["schema"]>>;
export declare const expertise_createFields: {
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
        parentId: {
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
export declare const expertise_create: (data: definitions["Expertise"] | definitions["Expertise"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["expertise_create"]["responses"][201]["schema"]>>;
export declare const expertise_read: (id: string, headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["expertise_read"]["responses"][200]["schema"]>>;
export declare const expertise_updateFields: {
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
        parentId: {
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
export declare const expertise_update: (id: string, data: definitions["Expertise"] | definitions["Expertise"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["expertise_update"]["responses"][200]["schema"]>>;
export declare const expertise_partial_updateFields: {
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
        parentId: {
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
export declare const expertise_partial_update: (id: string, data: definitions["Expertise"] | definitions["Expertise"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["expertise_partial_update"]["responses"][200]["schema"]>>;
export declare const expertise_delete: (id: string, headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<any["schema"]>>;
