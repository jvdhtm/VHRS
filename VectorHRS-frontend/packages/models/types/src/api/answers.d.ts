import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
export declare const answers_list: (data: operations["answers_list"]["parameters"], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["answers_list"]["responses"][200]["schema"]>>;
export declare const answers_create: (data: definitions["answers"] | definitions["answers"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["answers_create"]["responses"][201]["schema"]>>;
export declare const answers_read: (id: string, headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["answers_read"]["responses"][200]["schema"]>>;
export declare const answers_update: (id: string, data: definitions["answers"] | definitions["answers"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["answers_update"]["responses"][200]["schema"]>>;
export declare const answers_partial_update: (id: string, data: definitions["answers"] | definitions["answers"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["answers_partial_update"]["responses"][200]["schema"]>>;
export declare const answers_delete: (id: string, headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<any["schema"]>>;
