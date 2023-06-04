import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
export declare const staff_listFields: {
    name: string;
    in: string;
    description: string;
    required: boolean;
    type: string;
}[];
export declare const staff_list: (data: operations["staff_list"]["parameters"], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["staff_list"]["responses"][200]["schema"]>>;
export declare const staff_createFields: {
    required: string[];
    type: string;
    properties: {
        id: {
            title: string;
            type: string;
            readOnly: boolean;
        };
        department: {
            title: string;
            type: string;
        };
        condition: {
            title: string;
            type: string;
        };
        title: {
            title: string;
            type: string;
            maxLength: number;
            "x-nullable": boolean;
        };
        bossId: {
            title: string;
            type: string;
            "x-nullable": boolean;
        };
        who: {
            title: string;
            type: string;
        };
        x: {
            title: string;
            type: string;
        };
        y: {
            title: string;
            type: string;
        };
        level: {
            title: string;
            type: string;
        };
    };
};
export declare const staff_create: (data: definitions["Staff"] | definitions["Staff"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["staff_create"]["responses"][201]["schema"]>>;
export declare const staff_read: (id: string, headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["staff_read"]["responses"][200]["schema"]>>;
export declare const staff_updateFields: {
    required: string[];
    type: string;
    properties: {
        id: {
            title: string;
            type: string;
            readOnly: boolean;
        };
        department: {
            title: string;
            type: string;
        };
        condition: {
            title: string;
            type: string;
        };
        title: {
            title: string;
            type: string;
            maxLength: number;
            "x-nullable": boolean;
        };
        bossId: {
            title: string;
            type: string;
            "x-nullable": boolean;
        };
        who: {
            title: string;
            type: string;
        };
        x: {
            title: string;
            type: string;
        };
        y: {
            title: string;
            type: string;
        };
        level: {
            title: string;
            type: string;
        };
    };
};
export declare const staff_update: (id: string, data: definitions["Staff"] | definitions["Staff"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["staff_update"]["responses"][200]["schema"]>>;
export declare const staff_partial_updateFields: {
    required: string[];
    type: string;
    properties: {
        id: {
            title: string;
            type: string;
            readOnly: boolean;
        };
        department: {
            title: string;
            type: string;
        };
        condition: {
            title: string;
            type: string;
        };
        title: {
            title: string;
            type: string;
            maxLength: number;
            "x-nullable": boolean;
        };
        bossId: {
            title: string;
            type: string;
            "x-nullable": boolean;
        };
        who: {
            title: string;
            type: string;
        };
        x: {
            title: string;
            type: string;
        };
        y: {
            title: string;
            type: string;
        };
        level: {
            title: string;
            type: string;
        };
    };
};
export declare const staff_partial_update: (id: string, data: definitions["Staff"] | definitions["Staff"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["staff_partial_update"]["responses"][200]["schema"]>>;
export declare const staff_delete: (id: string, headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<any["schema"]>>;
