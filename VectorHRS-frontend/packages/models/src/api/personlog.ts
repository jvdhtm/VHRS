import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
import { dataLayerObj } from "../instance";
import type { RequestType } from "../instance";

export const personlog_list = async (
  data: operations["personlog_list"]["parameters"],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["personlog_list"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/personlog/";
  const request: RequestType = {
    endpoint,
    name: "personlog",
    verb: "get",
  };
  return await dataLayerObj.requestApi(request, headers, force, data.query);
};
export const personlog_create = async (
  data: definitions["PersonLog"] | definitions["PersonLog"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["personlog_create"]["responses"][201]["schema"]>
> => {
  let endpoint = _apiPrefix + "/personlog/";
  const request: RequestType = {
    endpoint,
    name: "personlog",
    verb: "post",
  };
  return await dataLayerObj.requestApi(request, headers, force, data);
};
export const personlog_read = async (
  id: string,
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["personlog_read"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/personlog/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "personlog",
    verb: "get",
  };
  return await dataLayerObj.requestApi(request, headers, force);
};
export const personlog_update = async (
  id: string,
  data: definitions["PersonLog"] | definitions["PersonLog"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["personlog_update"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/personlog/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "personlog",
    verb: "put",
  };
  return dataLayerObj.requestApi(request, headers, force, data);
};
export const personlog_partial_update = async (
  id: string,
  data: definitions["PersonLog"] | definitions["PersonLog"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<
    operations["personlog_partial_update"]["responses"][200]["schema"]
  >
> => {
  let endpoint = _apiPrefix + "/personlog/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "personlog",
    verb: "patch",
  };
  return dataLayerObj.requestApi(request, headers, force, data);
};
export const personlog_delete = async (
  id: string,
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<AxiosResponse<any["schema"]>> => {
  let endpoint = _apiPrefix + "/personlog/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "personlog",
    verb: "delete",
  };
  return dataLayerObj.requestApi(request, headers, force);
};
