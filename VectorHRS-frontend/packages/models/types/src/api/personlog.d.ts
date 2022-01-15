import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
export declare const personlog_list: (data: operations["personlog_list"]["parameters"], headers: any) => Promise<AxiosResponse<operations["personlog_list"]["responses"][200]["schema"]>>;
export declare const personlog_create: (data: definitions["PersonLog"] | definitions["PersonLog"][], headers: any) => Promise<AxiosResponse<operations["personlog_create"]["responses"][201]["schema"]>>;
export declare const personlog_read: (id: string, headers: any) => Promise<AxiosResponse<operations["personlog_read"]["responses"][200]["schema"]>>;
export declare const personlog_update: (id: string, data: definitions["PersonLog"] | definitions["PersonLog"][], headers: any) => Promise<AxiosResponse<operations["personlog_update"]["responses"][200]["schema"]>>;
export declare const personlog_partial_update: (id: string, data: definitions["PersonLog"] | definitions["PersonLog"][], headers: any) => Promise<AxiosResponse<operations["personlog_partial_update"]["responses"][200]["schema"]>>;
export declare const personlog_delete: (id: string, headers: any) => Promise<AxiosResponse<any["schema"]>>;
