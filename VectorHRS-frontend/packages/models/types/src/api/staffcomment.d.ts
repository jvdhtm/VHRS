import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
export declare const staffcomment_list: (data: operations["staffcomment_list"]["parameters"], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["staffcomment_list"]["responses"][200]["schema"]>>;
export declare const staffcomment_create: (data: definitions["StaffComment"] | definitions["StaffComment"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["staffcomment_create"]["responses"][201]["schema"]>>;
export declare const staffcomment_read: (id: string, headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["staffcomment_read"]["responses"][200]["schema"]>>;
export declare const staffcomment_update: (id: string, data: definitions["StaffComment"] | definitions["StaffComment"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["staffcomment_update"]["responses"][200]["schema"]>>;
export declare const staffcomment_partial_update: (id: string, data: definitions["StaffComment"] | definitions["StaffComment"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["staffcomment_partial_update"]["responses"][200]["schema"]>>;
export declare const staffcomment_delete: (id: string, headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<any["schema"]>>;
