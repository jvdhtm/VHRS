import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
export declare const staff_list: (data: operations["staff_list"]["parameters"], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["staff_list"]["responses"][200]["schema"]>>;
export declare const staff_create: (data: definitions["Staff"] | definitions["Staff"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["staff_create"]["responses"][201]["schema"]>>;
export declare const staff_read: (id: string, headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["staff_read"]["responses"][200]["schema"]>>;
export declare const staff_update: (id: string, data: definitions["Staff"] | definitions["Staff"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["staff_update"]["responses"][200]["schema"]>>;
export declare const staff_partial_update: (id: string, data: definitions["Staff"] | definitions["Staff"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["staff_partial_update"]["responses"][200]["schema"]>>;
export declare const staff_delete: (id: string, headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<any["schema"]>>;
