import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
export declare const stafffunctions_listFields: {
    name: string;
    in: string;
    description: string;
    required: boolean;
    type: string;
}[];
export declare const stafffunctions_list: (data: operations["stafffunctions_list"]["parameters"], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["stafffunctions_list"]["responses"][200]["schema"]>>;
export declare const stafffunctions_createFields: {
    required: string[];
    type: string;
    properties: {
        id: {
            title: string;
            type: string;
            readOnly: boolean;
        };
        function: {
            title: string;
            type: string;
        };
        staff: {
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
export declare const stafffunctions_create: (data: definitions["StaffFunctions"] | definitions["StaffFunctions"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["stafffunctions_create"]["responses"][201]["schema"]>>;
export declare const stafffunctions_read: (id: string, headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["stafffunctions_read"]["responses"][200]["schema"]>>;
export declare const stafffunctions_updateFields: {
    required: string[];
    type: string;
    properties: {
        id: {
            title: string;
            type: string;
            readOnly: boolean;
        };
        function: {
            title: string;
            type: string;
        };
        staff: {
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
export declare const stafffunctions_update: (id: string, data: definitions["StaffFunctions"] | definitions["StaffFunctions"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["stafffunctions_update"]["responses"][200]["schema"]>>;
export declare const stafffunctions_partial_updateFields: {
    required: string[];
    type: string;
    properties: {
        id: {
            title: string;
            type: string;
            readOnly: boolean;
        };
        function: {
            title: string;
            type: string;
        };
        staff: {
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
export declare const stafffunctions_partial_update: (id: string, data: definitions["StaffFunctions"] | definitions["StaffFunctions"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["stafffunctions_partial_update"]["responses"][200]["schema"]>>;
export declare const stafffunctions_delete: (id: string, headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<any["schema"]>>;
