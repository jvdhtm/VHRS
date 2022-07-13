import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
export declare const phone_list: (data: operations["phone_list"]["parameters"], headers: any, _apiPrefix?: string) => Promise<AxiosResponse<operations["phone_list"]["responses"][200]["schema"]>>;
export declare const phone_create: (data: definitions["Phone"] | definitions["Phone"][], headers: any, _apiPrefix?: string) => Promise<AxiosResponse<operations["phone_create"]["responses"][201]["schema"]>>;
export declare const phone_read: (id: string, headers: any, _apiPrefix?: string) => Promise<AxiosResponse<operations["phone_read"]["responses"][200]["schema"]>>;
export declare const phone_update: (id: string, data: definitions["Phone"] | definitions["Phone"][], headers: any, _apiPrefix?: string) => Promise<AxiosResponse<operations["phone_update"]["responses"][200]["schema"]>>;
export declare const phone_partial_update: (id: string, data: definitions["Phone"] | definitions["Phone"][], headers: any, _apiPrefix?: string) => Promise<AxiosResponse<operations["phone_partial_update"]["responses"][200]["schema"]>>;
export declare const phone_delete: (id: string, headers: any, _apiPrefix?: string) => Promise<AxiosResponse<any["schema"]>>;
