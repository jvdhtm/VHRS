import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
import { dataLayerObj } from "../instance";
import type { RequestType } from "../instance";

export const stafffunctions_list = async (
  data: operations["stafffunctions_list"]["parameters"],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["stafffunctions_list"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/stafffunctions/";
  const request: RequestType = {
    endpoint,
    name: "stafffunctions",
    verb: "get",
  };
  return await dataLayerObj.requestApi(request, headers, force, data.query);
};
export const stafffunctions_create = async (
  data: definitions["StaffFunctions"] | definitions["StaffFunctions"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["stafffunctions_create"]["responses"][201]["schema"]>
> => {
  let endpoint = _apiPrefix + "/stafffunctions/";
  const request: RequestType = {
    endpoint,
    name: "stafffunctions",
    verb: "post",
  };
  return await dataLayerObj.requestApi(request, headers, force, data);
};
export const stafffunctions_read = async (
  id: string,
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["stafffunctions_read"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/stafffunctions/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "stafffunctions",
    verb: "get",
  };
  return await dataLayerObj.requestApi(request, headers, force);
};
export const stafffunctions_update = async (
  id: string,
  data: definitions["StaffFunctions"] | definitions["StaffFunctions"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["stafffunctions_update"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/stafffunctions/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "stafffunctions",
    verb: "put",
  };
  return dataLayerObj.requestApi(request, headers, force, data);
};
export const stafffunctions_partial_update = async (
  id: string,
  data: definitions["StaffFunctions"] | definitions["StaffFunctions"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<
    operations["stafffunctions_partial_update"]["responses"][200]["schema"]
  >
> => {
  let endpoint = _apiPrefix + "/stafffunctions/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "stafffunctions",
    verb: "patch",
  };
  return dataLayerObj.requestApi(request, headers, force, data);
};
export const stafffunctions_delete = async (
  id: string,
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<AxiosResponse<any["schema"]>> => {
  let endpoint = _apiPrefix + "/stafffunctions/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "stafffunctions",
    verb: "delete",
  };
  return dataLayerObj.requestApi(request, headers, force);
};
