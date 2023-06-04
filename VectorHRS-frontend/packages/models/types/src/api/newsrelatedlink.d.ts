import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
export declare const newsrelatedlink_listFields: {
    name: string;
    in: string;
    description: string;
    required: boolean;
    type: string;
}[];
export declare const newsrelatedlink_list: (data: operations["newsrelatedlink_list"]["parameters"], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["newsrelatedlink_list"]["responses"][200]["schema"]>>;
export declare const newsrelatedlink_createFields: {
    required: string[];
    type: string;
    properties: {
        id: {
            title: string;
            type: string;
            readOnly: boolean;
        };
        news: {
            title: string;
            type: string;
        };
        name: {
            title: string;
            type: string;
            maxLength: number;
            "x-nullable": boolean;
        };
        created_date_time: {
            title: string;
            type: string;
            format: string;
        };
    };
};
export declare const newsrelatedlink_create: (data: definitions["NewsRelatedLink"] | definitions["NewsRelatedLink"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["newsrelatedlink_create"]["responses"][201]["schema"]>>;
export declare const newsrelatedlink_read: (id: string, headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["newsrelatedlink_read"]["responses"][200]["schema"]>>;
export declare const newsrelatedlink_updateFields: {
    required: string[];
    type: string;
    properties: {
        id: {
            title: string;
            type: string;
            readOnly: boolean;
        };
        news: {
            title: string;
            type: string;
        };
        name: {
            title: string;
            type: string;
            maxLength: number;
            "x-nullable": boolean;
        };
        created_date_time: {
            title: string;
            type: string;
            format: string;
        };
    };
};
export declare const newsrelatedlink_update: (id: string, data: definitions["NewsRelatedLink"] | definitions["NewsRelatedLink"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["newsrelatedlink_update"]["responses"][200]["schema"]>>;
export declare const newsrelatedlink_partial_updateFields: {
    required: string[];
    type: string;
    properties: {
        id: {
            title: string;
            type: string;
            readOnly: boolean;
        };
        news: {
            title: string;
            type: string;
        };
        name: {
            title: string;
            type: string;
            maxLength: number;
            "x-nullable": boolean;
        };
        created_date_time: {
            title: string;
            type: string;
            format: string;
        };
    };
};
export declare const newsrelatedlink_partial_update: (id: string, data: definitions["NewsRelatedLink"] | definitions["NewsRelatedLink"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["newsrelatedlink_partial_update"]["responses"][200]["schema"]>>;
export declare const newsrelatedlink_delete: (id: string, headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<any["schema"]>>;
