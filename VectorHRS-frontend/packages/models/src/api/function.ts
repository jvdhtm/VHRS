import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
import { dataLayerObj } from "../instance";
import type { RequestType } from "../instance";

export const function_list = async (
  data: operations["function_list"]["parameters"],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["function_list"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/function/";
  const request: RequestType = {
    endpoint,
    name: "function",
    verb: "get",
  };
  return await dataLayerObj.requestApi(request, headers, force, data.query);
};
export const function_create = async (
  data: definitions["Function"] | definitions["Function"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["function_create"]["responses"][201]["schema"]>
> => {
  let endpoint = _apiPrefix + "/function/";
  const request: RequestType = {
    endpoint,
    name: "function",
    verb: "post",
  };
  return await dataLayerObj.requestApi(request, headers, force, data);
};
export const function_read = async (
  id: string,
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["function_read"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/function/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "function",
    verb: "get",
  };
  return await dataLayerObj.requestApi(request, headers, force);
};
export const function_update = async (
  id: string,
  data: definitions["Function"] | definitions["Function"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["function_update"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/function/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "function",
    verb: "put",
  };
  return dataLayerObj.requestApi(request, headers, force, data);
};
export const function_partial_update = async (
  id: string,
  data: definitions["Function"] | definitions["Function"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<
    operations["function_partial_update"]["responses"][200]["schema"]
  >
> => {
  let endpoint = _apiPrefix + "/function/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "function",
    verb: "patch",
  };
  return dataLayerObj.requestApi(request, headers, force, data);
};
export const function_delete = async (
  id: string,
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<AxiosResponse<any["schema"]>> => {
  let endpoint = _apiPrefix + "/function/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "function",
    verb: "delete",
  };
  return dataLayerObj.requestApi(request, headers, force);
};
