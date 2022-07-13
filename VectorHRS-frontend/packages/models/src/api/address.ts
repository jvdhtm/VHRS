import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
import { dataLayerObj } from "../instance";
import type { RequestType } from "../instance";

export const address_list = async (
  data: operations["address_list"]["parameters"],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["address_list"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/address/";
  const request: RequestType = {
    endpoint,
    name: "address",
    verb: "get",
  };
  return await dataLayerObj.requestApi(request, headers, force, data.query);
};
export const address_create = async (
  data: definitions["Address"] | definitions["Address"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["address_create"]["responses"][201]["schema"]>
> => {
  let endpoint = _apiPrefix + "/address/";
  const request: RequestType = {
    endpoint,
    name: "address",
    verb: "post",
  };
  return await dataLayerObj.requestApi(request, headers, force, data);
};
export const address_read = async (
  id: string,
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["address_read"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/address/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "address",
    verb: "get",
  };
  return await dataLayerObj.requestApi(request, headers, force);
};
export const address_update = async (
  id: string,
  data: definitions["Address"] | definitions["Address"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["address_update"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/address/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "address",
    verb: "put",
  };
  return dataLayerObj.requestApi(request, headers, force, data);
};
export const address_partial_update = async (
  id: string,
  data: definitions["Address"] | definitions["Address"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<
    operations["address_partial_update"]["responses"][200]["schema"]
  >
> => {
  let endpoint = _apiPrefix + "/address/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "address",
    verb: "patch",
  };
  return dataLayerObj.requestApi(request, headers, force, data);
};
export const address_delete = async (
  id: string,
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<AxiosResponse<any["schema"]>> => {
  let endpoint = _apiPrefix + "/address/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "address",
    verb: "delete",
  };
  return dataLayerObj.requestApi(request, headers, force);
};
