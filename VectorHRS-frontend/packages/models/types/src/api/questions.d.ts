import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
export declare const questions_list: (data: operations["questions_list"]["parameters"], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["questions_list"]["responses"][200]["schema"]>>;
export declare const questions_create: (data: definitions["Questions"] | definitions["Questions"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["questions_create"]["responses"][201]["schema"]>>;
export declare const questions_read: (id: string, headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["questions_read"]["responses"][200]["schema"]>>;
export declare const questions_update: (id: string, data: definitions["Questions"] | definitions["Questions"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["questions_update"]["responses"][200]["schema"]>>;
export declare const questions_partial_update: (id: string, data: definitions["Questions"] | definitions["Questions"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["questions_partial_update"]["responses"][200]["schema"]>>;
export declare const questions_delete: (id: string, headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<any["schema"]>>;
