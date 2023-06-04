import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
export declare const questionsrelatedlink_listFields: {
    name: string;
    in: string;
    description: string;
    required: boolean;
    type: string;
}[];
export declare const questionsrelatedlink_list: (data: operations["questionsrelatedlink_list"]["parameters"], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["questionsrelatedlink_list"]["responses"][200]["schema"]>>;
export declare const questionsrelatedlink_createFields: {
    required: string[];
    type: string;
    properties: {
        id: {
            title: string;
            type: string;
            readOnly: boolean;
        };
        question: {
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
export declare const questionsrelatedlink_create: (data: definitions["QuestionsRelatedLink"] | definitions["QuestionsRelatedLink"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["questionsrelatedlink_create"]["responses"][201]["schema"]>>;
export declare const questionsrelatedlink_read: (id: string, headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["questionsrelatedlink_read"]["responses"][200]["schema"]>>;
export declare const questionsrelatedlink_updateFields: {
    required: string[];
    type: string;
    properties: {
        id: {
            title: string;
            type: string;
            readOnly: boolean;
        };
        question: {
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
export declare const questionsrelatedlink_update: (id: string, data: definitions["QuestionsRelatedLink"] | definitions["QuestionsRelatedLink"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["questionsrelatedlink_update"]["responses"][200]["schema"]>>;
export declare const questionsrelatedlink_partial_updateFields: {
    required: string[];
    type: string;
    properties: {
        id: {
            title: string;
            type: string;
            readOnly: boolean;
        };
        question: {
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
export declare const questionsrelatedlink_partial_update: (id: string, data: definitions["QuestionsRelatedLink"] | definitions["QuestionsRelatedLink"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["questionsrelatedlink_partial_update"]["responses"][200]["schema"]>>;
export declare const questionsrelatedlink_delete: (id: string, headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<any["schema"]>>;
