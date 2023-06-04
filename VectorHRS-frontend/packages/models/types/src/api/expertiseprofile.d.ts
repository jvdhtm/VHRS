import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
export declare const expertiseprofile_listFields: {
    name: string;
    in: string;
    description: string;
    required: boolean;
    type: string;
}[];
export declare const expertiseprofile_list: (data: operations["expertiseprofile_list"]["parameters"], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["expertiseprofile_list"]["responses"][200]["schema"]>>;
export declare const expertiseprofile_createFields: {
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
        person: {
            title: string;
            type: string;
        };
        expertise: {
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
export declare const expertiseprofile_create: (data: definitions["ExpertiseProfile"] | definitions["ExpertiseProfile"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["expertiseprofile_create"]["responses"][201]["schema"]>>;
export declare const expertiseprofile_read: (id: string, headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["expertiseprofile_read"]["responses"][200]["schema"]>>;
export declare const expertiseprofile_updateFields: {
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
        person: {
            title: string;
            type: string;
        };
        expertise: {
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
export declare const expertiseprofile_update: (id: string, data: definitions["ExpertiseProfile"] | definitions["ExpertiseProfile"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["expertiseprofile_update"]["responses"][200]["schema"]>>;
export declare const expertiseprofile_partial_updateFields: {
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
        person: {
            title: string;
            type: string;
        };
        expertise: {
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
export declare const expertiseprofile_partial_update: (id: string, data: definitions["ExpertiseProfile"] | definitions["ExpertiseProfile"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["expertiseprofile_partial_update"]["responses"][200]["schema"]>>;
export declare const expertiseprofile_delete: (id: string, headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<any["schema"]>>;
