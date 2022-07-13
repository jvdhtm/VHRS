import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
import { dataLayerObj } from "../instance";
import type { RequestType } from "../instance";

export const staff_list = async (
  data: operations["staff_list"]["parameters"],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["staff_list"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/staff/";
  const request: RequestType = {
    endpoint,
    name: "staff",
    verb: "get",
  };
  return await dataLayerObj.requestApi(request, headers, force, data.query);
};
export const staff_create = async (
  data: definitions["Staff"] | definitions["Staff"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["staff_create"]["responses"][201]["schema"]>
> => {
  let endpoint = _apiPrefix + "/staff/";
  const request: RequestType = {
    endpoint,
    name: "staff",
    verb: "post",
  };
  return await dataLayerObj.requestApi(request, headers, force, data);
};
export const staff_read = async (
  id: string,
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["staff_read"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/staff/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "staff",
    verb: "get",
  };
  return await dataLayerObj.requestApi(request, headers, force);
};
export const staff_update = async (
  id: string,
  data: definitions["Staff"] | definitions["Staff"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["staff_update"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/staff/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "staff",
    verb: "put",
  };
  return dataLayerObj.requestApi(request, headers, force, data);
};
export const staff_partial_update = async (
  id: string,
  data: definitions["Staff"] | definitions["Staff"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["staff_partial_update"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/staff/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "staff",
    verb: "patch",
  };
  return dataLayerObj.requestApi(request, headers, force, data);
};
export const staff_delete = async (
  id: string,
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<AxiosResponse<any["schema"]>> => {
  let endpoint = _apiPrefix + "/staff/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "staff",
    verb: "delete",
  };
  return dataLayerObj.requestApi(request, headers, force);
};
