import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
export declare const personstage_listFields: {
    name: string;
    in: string;
    description: string;
    required: boolean;
    type: string;
}[];
export declare const personstage_list: (data: operations["personstage_list"]["parameters"], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["personstage_list"]["responses"][200]["schema"]>>;
export declare const personstage_createFields: {
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
        step: {
            title: string;
            type: string;
            enum: string[];
        };
        x: {
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
export declare const personstage_create: (data: definitions["PersonStage"] | definitions["PersonStage"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["personstage_create"]["responses"][201]["schema"]>>;
export declare const personstage_read: (id: string, headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["personstage_read"]["responses"][200]["schema"]>>;
export declare const personstage_updateFields: {
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
        step: {
            title: string;
            type: string;
            enum: string[];
        };
        x: {
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
export declare const personstage_update: (id: string, data: definitions["PersonStage"] | definitions["PersonStage"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["personstage_update"]["responses"][200]["schema"]>>;
export declare const personstage_partial_updateFields: {
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
        step: {
            title: string;
            type: string;
            enum: string[];
        };
        x: {
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
export declare const personstage_partial_update: (id: string, data: definitions["PersonStage"] | definitions["PersonStage"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["personstage_partial_update"]["responses"][200]["schema"]>>;
export declare const personstage_delete: (id: string, headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<any["schema"]>>;
