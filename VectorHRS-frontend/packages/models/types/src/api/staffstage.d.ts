import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
export declare const staffstage_list: (data: operations["staffstage_list"]["parameters"], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["staffstage_list"]["responses"][200]["schema"]>>;
export declare const staffstage_create: (data: definitions["StaffStage"] | definitions["StaffStage"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["staffstage_create"]["responses"][201]["schema"]>>;
export declare const staffstage_read: (id: string, headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["staffstage_read"]["responses"][200]["schema"]>>;
export declare const staffstage_update: (id: string, data: definitions["StaffStage"] | definitions["StaffStage"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["staffstage_update"]["responses"][200]["schema"]>>;
export declare const staffstage_partial_update: (id: string, data: definitions["StaffStage"] | definitions["StaffStage"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["staffstage_partial_update"]["responses"][200]["schema"]>>;
export declare const staffstage_delete: (id: string, headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<any["schema"]>>;
