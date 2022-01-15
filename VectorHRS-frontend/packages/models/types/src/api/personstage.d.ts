import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
export declare const personstage_list: (data: operations["personstage_list"]["parameters"], headers: any) => Promise<AxiosResponse<operations["personstage_list"]["responses"][200]["schema"]>>;
export declare const personstage_create: (data: definitions["PersonStage"] | definitions["PersonStage"][], headers: any) => Promise<AxiosResponse<operations["personstage_create"]["responses"][201]["schema"]>>;
export declare const personstage_read: (id: string, headers: any) => Promise<AxiosResponse<operations["personstage_read"]["responses"][200]["schema"]>>;
export declare const personstage_update: (id: string, data: definitions["PersonStage"] | definitions["PersonStage"][], headers: any) => Promise<AxiosResponse<operations["personstage_update"]["responses"][200]["schema"]>>;
export declare const personstage_partial_update: (id: string, data: definitions["PersonStage"] | definitions["PersonStage"][], headers: any) => Promise<AxiosResponse<operations["personstage_partial_update"]["responses"][200]["schema"]>>;
export declare const personstage_delete: (id: string, headers: any) => Promise<AxiosResponse<any["schema"]>>;
