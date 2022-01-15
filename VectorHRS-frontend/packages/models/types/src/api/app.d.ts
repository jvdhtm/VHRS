import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
export declare const app_list: (data: operations["app_list"]["parameters"], headers: any) => Promise<AxiosResponse<operations["app_list"]["responses"][200]["schema"]>>;
export declare const app_create: (data: definitions["App"] | definitions["App"][], headers: any) => Promise<AxiosResponse<operations["app_create"]["responses"][201]["schema"]>>;
export declare const app_read: (id: string, headers: any) => Promise<AxiosResponse<operations["app_read"]["responses"][200]["schema"]>>;
export declare const app_update: (id: string, data: definitions["App"] | definitions["App"][], headers: any) => Promise<AxiosResponse<operations["app_update"]["responses"][200]["schema"]>>;
export declare const app_partial_update: (id: string, data: definitions["App"] | definitions["App"][], headers: any) => Promise<AxiosResponse<operations["app_partial_update"]["responses"][200]["schema"]>>;
export declare const app_delete: (id: string, headers: any) => Promise<AxiosResponse<any["schema"]>>;
