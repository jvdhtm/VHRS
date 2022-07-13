import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
export declare const address_list: (data: operations["address_list"]["parameters"], headers: any, _apiPrefix?: string) => Promise<AxiosResponse<operations["address_list"]["responses"][200]["schema"]>>;
export declare const address_create: (data: definitions["Address"] | definitions["Address"][], headers: any, _apiPrefix?: string) => Promise<AxiosResponse<operations["address_create"]["responses"][201]["schema"]>>;
export declare const address_read: (id: string, headers: any, _apiPrefix?: string) => Promise<AxiosResponse<operations["address_read"]["responses"][200]["schema"]>>;
export declare const address_update: (id: string, data: definitions["Address"] | definitions["Address"][], headers: any, _apiPrefix?: string) => Promise<AxiosResponse<operations["address_update"]["responses"][200]["schema"]>>;
export declare const address_partial_update: (id: string, data: definitions["Address"] | definitions["Address"][], headers: any, _apiPrefix?: string) => Promise<AxiosResponse<operations["address_partial_update"]["responses"][200]["schema"]>>;
export declare const address_delete: (id: string, headers: any, _apiPrefix?: string) => Promise<AxiosResponse<any["schema"]>>;
