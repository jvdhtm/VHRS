import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
import { dataLayerObj } from "../instance";
import type { RequestType } from "../instance";

export const app_list = async (
  data: operations["app_list"]["parameters"],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["app_list"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/app/";
  const request: RequestType = {
    endpoint,
    name: "app",
    verb: "get",
  };
  return await dataLayerObj.requestApi(request, headers, force, data.query);
};
export const app_create = async (
  data: definitions["App"] | definitions["App"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["app_create"]["responses"][201]["schema"]>
> => {
  let endpoint = _apiPrefix + "/app/";
  const request: RequestType = {
    endpoint,
    name: "app",
    verb: "post",
  };
  return await dataLayerObj.requestApi(request, headers, force, data);
};
export const app_read = async (
  id: string,
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["app_read"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/app/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "app",
    verb: "get",
  };
  return await dataLayerObj.requestApi(request, headers, force);
};
export const app_update = async (
  id: string,
  data: definitions["App"] | definitions["App"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["app_update"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/app/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "app",
    verb: "put",
  };
  return dataLayerObj.requestApi(request, headers, force, data);
};
export const app_partial_update = async (
  id: string,
  data: definitions["App"] | definitions["App"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["app_partial_update"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/app/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "app",
    verb: "patch",
  };
  return dataLayerObj.requestApi(request, headers, force, data);
};
export const app_delete = async (
  id: string,
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<AxiosResponse<any["schema"]>> => {
  let endpoint = _apiPrefix + "/app/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "app",
    verb: "delete",
  };
  return dataLayerObj.requestApi(request, headers, force);
};
