import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
export declare const user_list: (data: operations["user_list"]["parameters"], headers: any) => Promise<AxiosResponse<operations["user_list"]["responses"][200]["schema"]>>;
export declare const user_create: (data: definitions["User"] | definitions["User"][], headers: any) => Promise<AxiosResponse<operations["user_create"]["responses"][201]["schema"]>>;
export declare const user_read: (id: string, headers: any) => Promise<AxiosResponse<operations["user_read"]["responses"][200]["schema"]>>;
export declare const user_update: (id: string, data: definitions["User"] | definitions["User"][], headers: any) => Promise<AxiosResponse<operations["user_update"]["responses"][200]["schema"]>>;
export declare const user_partial_update: (id: string, data: definitions["User"] | definitions["User"][], headers: any) => Promise<AxiosResponse<operations["user_partial_update"]["responses"][200]["schema"]>>;
export declare const user_delete: (id: string, headers: any) => Promise<AxiosResponse<any["schema"]>>;
