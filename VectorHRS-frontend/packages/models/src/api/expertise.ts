import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
import { dataLayerObj } from "../instance";
import type { RequestType } from "../instance";

export const expertise_list = async (
  data: operations["expertise_list"]["parameters"],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["expertise_list"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/expertise/";
  const request: RequestType = {
    endpoint,
    name: "expertise",
    verb: "get",
  };
  return await dataLayerObj.requestApi(request, headers, force, data.query);
};
export const expertise_create = async (
  data: definitions["Expertise"] | definitions["Expertise"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["expertise_create"]["responses"][201]["schema"]>
> => {
  let endpoint = _apiPrefix + "/expertise/";
  const request: RequestType = {
    endpoint,
    name: "expertise",
    verb: "post",
  };
  return await dataLayerObj.requestApi(request, headers, force, data);
};
export const expertise_read = async (
  id: string,
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["expertise_read"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/expertise/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "expertise",
    verb: "get",
  };
  return await dataLayerObj.requestApi(request, headers, force);
};
export const expertise_update = async (
  id: string,
  data: definitions["Expertise"] | definitions["Expertise"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["expertise_update"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/expertise/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "expertise",
    verb: "put",
  };
  return dataLayerObj.requestApi(request, headers, force, data);
};
export const expertise_partial_update = async (
  id: string,
  data: definitions["Expertise"] | definitions["Expertise"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<
    operations["expertise_partial_update"]["responses"][200]["schema"]
  >
> => {
  let endpoint = _apiPrefix + "/expertise/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "expertise",
    verb: "patch",
  };
  return dataLayerObj.requestApi(request, headers, force, data);
};
export const expertise_delete = async (
  id: string,
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<AxiosResponse<any["schema"]>> => {
  let endpoint = _apiPrefix + "/expertise/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "expertise",
    verb: "delete",
  };
  return dataLayerObj.requestApi(request, headers, force);
};
