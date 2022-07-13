import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
export declare const department_list: (data: operations["department_list"]["parameters"], headers: any, _apiPrefix?: string) => Promise<AxiosResponse<operations["department_list"]["responses"][200]["schema"]>>;
export declare const department_create: (data: definitions["Department"] | definitions["Department"][], headers: any, _apiPrefix?: string) => Promise<AxiosResponse<operations["department_create"]["responses"][201]["schema"]>>;
export declare const department_read: (id: string, headers: any, _apiPrefix?: string) => Promise<AxiosResponse<operations["department_read"]["responses"][200]["schema"]>>;
export declare const department_update: (id: string, data: definitions["Department"] | definitions["Department"][], headers: any, _apiPrefix?: string) => Promise<AxiosResponse<operations["department_update"]["responses"][200]["schema"]>>;
export declare const department_partial_update: (id: string, data: definitions["Department"] | definitions["Department"][], headers: any, _apiPrefix?: string) => Promise<AxiosResponse<operations["department_partial_update"]["responses"][200]["schema"]>>;
export declare const department_delete: (id: string, headers: any, _apiPrefix?: string) => Promise<AxiosResponse<any["schema"]>>;
