import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
export declare const newsletter_list: (data: operations["newsletter_list"]["parameters"], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["newsletter_list"]["responses"][200]["schema"]>>;
export declare const newsletter_create: (data: definitions["NewsLetter"] | definitions["NewsLetter"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["newsletter_create"]["responses"][201]["schema"]>>;
export declare const newsletter_read: (id: string, headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["newsletter_read"]["responses"][200]["schema"]>>;
export declare const newsletter_update: (id: string, data: definitions["NewsLetter"] | definitions["NewsLetter"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["newsletter_update"]["responses"][200]["schema"]>>;
export declare const newsletter_partial_update: (id: string, data: definitions["NewsLetter"] | definitions["NewsLetter"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["newsletter_partial_update"]["responses"][200]["schema"]>>;
export declare const newsletter_delete: (id: string, headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<any["schema"]>>;
