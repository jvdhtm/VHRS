import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
export declare const comment_list: (data: operations["comment_list"]["parameters"], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["comment_list"]["responses"][200]["schema"]>>;
export declare const comment_create: (data: definitions["Comment"] | definitions["Comment"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["comment_create"]["responses"][201]["schema"]>>;
export declare const comment_read: (id: string, headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["comment_read"]["responses"][200]["schema"]>>;
export declare const comment_update: (id: string, data: definitions["Comment"] | definitions["Comment"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["comment_update"]["responses"][200]["schema"]>>;
export declare const comment_partial_update: (id: string, data: definitions["Comment"] | definitions["Comment"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["comment_partial_update"]["responses"][200]["schema"]>>;
export declare const comment_delete: (id: string, headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<any["schema"]>>;
