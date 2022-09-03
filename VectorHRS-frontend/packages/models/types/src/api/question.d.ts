import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
export declare const question_list: (data: operations["question_list"]["parameters"], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["question_list"]["responses"][200]["schema"]>>;
export declare const question_create: (data: definitions["Question"] | definitions["Question"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["question_create"]["responses"][201]["schema"]>>;
export declare const question_read: (id: string, headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["question_read"]["responses"][200]["schema"]>>;
export declare const question_update: (id: string, data: definitions["Question"] | definitions["Question"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["question_update"]["responses"][200]["schema"]>>;
export declare const question_partial_update: (id: string, data: definitions["Question"] | definitions["Question"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["question_partial_update"]["responses"][200]["schema"]>>;
export declare const question_delete: (id: string, headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<any["schema"]>>;
