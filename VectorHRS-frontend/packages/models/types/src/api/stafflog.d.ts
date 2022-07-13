import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
export declare const stafflog_list: (data: operations["stafflog_list"]["parameters"], headers: any, _apiPrefix?: string) => Promise<AxiosResponse<operations["stafflog_list"]["responses"][200]["schema"]>>;
export declare const stafflog_create: (data: definitions["StaffLog"] | definitions["StaffLog"][], headers: any, _apiPrefix?: string) => Promise<AxiosResponse<operations["stafflog_create"]["responses"][201]["schema"]>>;
export declare const stafflog_read: (id: string, headers: any, _apiPrefix?: string) => Promise<AxiosResponse<operations["stafflog_read"]["responses"][200]["schema"]>>;
export declare const stafflog_update: (id: string, data: definitions["StaffLog"] | definitions["StaffLog"][], headers: any, _apiPrefix?: string) => Promise<AxiosResponse<operations["stafflog_update"]["responses"][200]["schema"]>>;
export declare const stafflog_partial_update: (id: string, data: definitions["StaffLog"] | definitions["StaffLog"][], headers: any, _apiPrefix?: string) => Promise<AxiosResponse<operations["stafflog_partial_update"]["responses"][200]["schema"]>>;
export declare const stafflog_delete: (id: string, headers: any, _apiPrefix?: string) => Promise<AxiosResponse<any["schema"]>>;
