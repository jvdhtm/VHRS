import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
export declare const stafffunctions_list: (data: operations["stafffunctions_list"]["parameters"], headers: any, _apiPrefix?: string) => Promise<AxiosResponse<operations["stafffunctions_list"]["responses"][200]["schema"]>>;
export declare const stafffunctions_create: (data: definitions["StaffFunctions"] | definitions["StaffFunctions"][], headers: any, _apiPrefix?: string) => Promise<AxiosResponse<operations["stafffunctions_create"]["responses"][201]["schema"]>>;
export declare const stafffunctions_read: (id: string, headers: any, _apiPrefix?: string) => Promise<AxiosResponse<operations["stafffunctions_read"]["responses"][200]["schema"]>>;
export declare const stafffunctions_update: (id: string, data: definitions["StaffFunctions"] | definitions["StaffFunctions"][], headers: any, _apiPrefix?: string) => Promise<AxiosResponse<operations["stafffunctions_update"]["responses"][200]["schema"]>>;
export declare const stafffunctions_partial_update: (id: string, data: definitions["StaffFunctions"] | definitions["StaffFunctions"][], headers: any, _apiPrefix?: string) => Promise<AxiosResponse<operations["stafffunctions_partial_update"]["responses"][200]["schema"]>>;
export declare const stafffunctions_delete: (id: string, headers: any, _apiPrefix?: string) => Promise<AxiosResponse<any["schema"]>>;
