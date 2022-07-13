import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
export declare const comments_list: (data: operations["comments_list"]["parameters"], headers: any, _apiPrefix?: string) => Promise<AxiosResponse<operations["comments_list"]["responses"][200]["schema"]>>;
export declare const comments_create: (data: definitions["Comments"] | definitions["Comments"][], headers: any, _apiPrefix?: string) => Promise<AxiosResponse<operations["comments_create"]["responses"][201]["schema"]>>;
export declare const comments_read: (id: string, headers: any, _apiPrefix?: string) => Promise<AxiosResponse<operations["comments_read"]["responses"][200]["schema"]>>;
export declare const comments_update: (id: string, data: definitions["Comments"] | definitions["Comments"][], headers: any, _apiPrefix?: string) => Promise<AxiosResponse<operations["comments_update"]["responses"][200]["schema"]>>;
export declare const comments_partial_update: (id: string, data: definitions["Comments"] | definitions["Comments"][], headers: any, _apiPrefix?: string) => Promise<AxiosResponse<operations["comments_partial_update"]["responses"][200]["schema"]>>;
export declare const comments_delete: (id: string, headers: any, _apiPrefix?: string) => Promise<AxiosResponse<any["schema"]>>;
