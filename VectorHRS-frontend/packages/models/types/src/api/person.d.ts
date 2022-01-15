import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
export declare const person_list: (data: operations["person_list"]["parameters"], headers: any) => Promise<AxiosResponse<operations["person_list"]["responses"][200]["schema"]>>;
export declare const person_create: (data: definitions["Person"] | definitions["Person"][], headers: any) => Promise<AxiosResponse<operations["person_create"]["responses"][201]["schema"]>>;
export declare const person_read: (id: string, headers: any) => Promise<AxiosResponse<operations["person_read"]["responses"][200]["schema"]>>;
export declare const person_update: (id: string, data: definitions["Person"] | definitions["Person"][], headers: any) => Promise<AxiosResponse<operations["person_update"]["responses"][200]["schema"]>>;
export declare const person_partial_update: (id: string, data: definitions["Person"] | definitions["Person"][], headers: any) => Promise<AxiosResponse<operations["person_partial_update"]["responses"][200]["schema"]>>;
export declare const person_delete: (id: string, headers: any) => Promise<AxiosResponse<any["schema"]>>;
