import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
export declare const newsrelatedlink_list: (data: operations["newsrelatedlink_list"]["parameters"], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["newsrelatedlink_list"]["responses"][200]["schema"]>>;
export declare const newsrelatedlink_create: (data: definitions["NewsRelatedLink"] | definitions["NewsRelatedLink"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["newsrelatedlink_create"]["responses"][201]["schema"]>>;
export declare const newsrelatedlink_read: (id: string, headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["newsrelatedlink_read"]["responses"][200]["schema"]>>;
export declare const newsrelatedlink_update: (id: string, data: definitions["NewsRelatedLink"] | definitions["NewsRelatedLink"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["newsrelatedlink_update"]["responses"][200]["schema"]>>;
export declare const newsrelatedlink_partial_update: (id: string, data: definitions["NewsRelatedLink"] | definitions["NewsRelatedLink"][], headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<operations["newsrelatedlink_partial_update"]["responses"][200]["schema"]>>;
export declare const newsrelatedlink_delete: (id: string, headers: any, _apiPrefix?: string, force?: boolean) => Promise<AxiosResponse<any["schema"]>>;
