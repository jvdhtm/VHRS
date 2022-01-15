import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
export declare const expertise_list: (data: operations["expertise_list"]["parameters"], headers: any) => Promise<AxiosResponse<operations["expertise_list"]["responses"][200]["schema"]>>;
export declare const expertise_create: (data: definitions["Expertise"] | definitions["Expertise"][], headers: any) => Promise<AxiosResponse<operations["expertise_create"]["responses"][201]["schema"]>>;
export declare const expertise_read: (id: string, headers: any) => Promise<AxiosResponse<operations["expertise_read"]["responses"][200]["schema"]>>;
export declare const expertise_update: (id: string, data: definitions["Expertise"] | definitions["Expertise"][], headers: any) => Promise<AxiosResponse<operations["expertise_update"]["responses"][200]["schema"]>>;
export declare const expertise_partial_update: (id: string, data: definitions["Expertise"] | definitions["Expertise"][], headers: any) => Promise<AxiosResponse<operations["expertise_partial_update"]["responses"][200]["schema"]>>;
export declare const expertise_delete: (id: string, headers: any) => Promise<AxiosResponse<any["schema"]>>;
