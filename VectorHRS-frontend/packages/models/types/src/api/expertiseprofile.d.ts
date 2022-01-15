import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
export declare const expertiseprofile_list: (data: operations["expertiseprofile_list"]["parameters"], headers: any) => Promise<AxiosResponse<operations["expertiseprofile_list"]["responses"][200]["schema"]>>;
export declare const expertiseprofile_create: (data: definitions["ExpertiseProfile"] | definitions["ExpertiseProfile"][], headers: any) => Promise<AxiosResponse<operations["expertiseprofile_create"]["responses"][201]["schema"]>>;
export declare const expertiseprofile_read: (id: string, headers: any) => Promise<AxiosResponse<operations["expertiseprofile_read"]["responses"][200]["schema"]>>;
export declare const expertiseprofile_update: (id: string, data: definitions["ExpertiseProfile"] | definitions["ExpertiseProfile"][], headers: any) => Promise<AxiosResponse<operations["expertiseprofile_update"]["responses"][200]["schema"]>>;
export declare const expertiseprofile_partial_update: (id: string, data: definitions["ExpertiseProfile"] | definitions["ExpertiseProfile"][], headers: any) => Promise<AxiosResponse<operations["expertiseprofile_partial_update"]["responses"][200]["schema"]>>;
export declare const expertiseprofile_delete: (id: string, headers: any) => Promise<AxiosResponse<any["schema"]>>;
