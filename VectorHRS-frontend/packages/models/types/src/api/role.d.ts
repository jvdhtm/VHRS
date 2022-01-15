import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
export declare const role_list: (data: operations["role_list"]["parameters"], headers: any) => Promise<AxiosResponse<operations["role_list"]["responses"][200]["schema"]>>;
export declare const role_create: (data: definitions["Role"] | definitions["Role"][], headers: any) => Promise<AxiosResponse<operations["role_create"]["responses"][201]["schema"]>>;
export declare const role_read: (id: string, headers: any) => Promise<AxiosResponse<operations["role_read"]["responses"][200]["schema"]>>;
export declare const role_update: (id: string, data: definitions["Role"] | definitions["Role"][], headers: any) => Promise<AxiosResponse<operations["role_update"]["responses"][200]["schema"]>>;
export declare const role_partial_update: (id: string, data: definitions["Role"] | definitions["Role"][], headers: any) => Promise<AxiosResponse<operations["role_partial_update"]["responses"][200]["schema"]>>;
export declare const role_delete: (id: string, headers: any) => Promise<AxiosResponse<any["schema"]>>;
