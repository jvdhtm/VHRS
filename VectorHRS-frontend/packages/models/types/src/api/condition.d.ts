import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
export declare const condition_listFields: {
    name: string;
    in: string;
    description: string;
    required: boolean;
    type: string;
}[];
export declare const condition_list: (data: operations["condition_list"]["parameters"], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["condition_list"]["responses"][200]["schema"]>>;
export declare const condition_createFields: {
    required: string[];
    type: string;
    properties: {
        id: {
            title: string;
            type: string;
            readOnly: boolean;
        };
        severity: {
            title: string;
            type: string;
            enum: string[];
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
export declare const condition_create: (data: definitions["Condition"] | definitions["Condition"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["condition_create"]["responses"][201]["schema"]>>;
export declare const condition_read: (id: string, headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["condition_read"]["responses"][200]["schema"]>>;
export declare const condition_updateFields: {
    required: string[];
    type: string;
    properties: {
        id: {
            title: string;
            type: string;
            readOnly: boolean;
        };
        severity: {
            title: string;
            type: string;
            enum: string[];
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
export declare const condition_update: (id: string, data: definitions["Condition"] | definitions["Condition"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["condition_update"]["responses"][200]["schema"]>>;
export declare const condition_partial_updateFields: {
    required: string[];
    type: string;
    properties: {
        id: {
            title: string;
            type: string;
            readOnly: boolean;
        };
        severity: {
            title: string;
            type: string;
            enum: string[];
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
export declare const condition_partial_update: (id: string, data: definitions["Condition"] | definitions["Condition"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["condition_partial_update"]["responses"][200]["schema"]>>;
export declare const condition_delete: (id: string, headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<any["schema"]>>;
