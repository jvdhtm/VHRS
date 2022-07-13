import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
import { dataLayerObj } from "../instance";
import type { RequestType } from "../instance";

export const phone_list = async (
  data: operations["phone_list"]["parameters"],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["phone_list"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/phone/";
  const request: RequestType = {
    endpoint,
    name: "phone",
    verb: "get",
  };
  return await dataLayerObj.requestApi(request, headers, force, data.query);
};
export const phone_create = async (
  data: definitions["Phone"] | definitions["Phone"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["phone_create"]["responses"][201]["schema"]>
> => {
  let endpoint = _apiPrefix + "/phone/";
  const request: RequestType = {
    endpoint,
    name: "phone",
    verb: "post",
  };
  return await dataLayerObj.requestApi(request, headers, force, data);
};
export const phone_read = async (
  id: string,
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["phone_read"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/phone/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "phone",
    verb: "get",
  };
  return await dataLayerObj.requestApi(request, headers, force);
};
export const phone_update = async (
  id: string,
  data: definitions["Phone"] | definitions["Phone"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["phone_update"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/phone/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "phone",
    verb: "put",
  };
  return dataLayerObj.requestApi(request, headers, force, data);
};
export const phone_partial_update = async (
  id: string,
  data: definitions["Phone"] | definitions["Phone"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["phone_partial_update"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/phone/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "phone",
    verb: "patch",
  };
  return dataLayerObj.requestApi(request, headers, force, data);
};
export const phone_delete = async (
  id: string,
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<AxiosResponse<any["schema"]>> => {
  let endpoint = _apiPrefix + "/phone/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "phone",
    verb: "delete",
  };
  return dataLayerObj.requestApi(request, headers, force);
};
