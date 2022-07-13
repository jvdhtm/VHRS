import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
import { dataLayerObj } from "../instance";
import type { RequestType } from "../instance";

export const person_list = async (
  data: operations["person_list"]["parameters"],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["person_list"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/person/";
  const request: RequestType = {
    endpoint,
    name: "person",
    verb: "get",
  };
  return await dataLayerObj.requestApi(request, headers, force, data.query);
};
export const person_create = async (
  data: definitions["Person"] | definitions["Person"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["person_create"]["responses"][201]["schema"]>
> => {
  let endpoint = _apiPrefix + "/person/";
  const request: RequestType = {
    endpoint,
    name: "person",
    verb: "post",
  };
  return await dataLayerObj.requestApi(request, headers, force, data);
};
export const person_read = async (
  id: string,
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["person_read"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/person/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "person",
    verb: "get",
  };
  return await dataLayerObj.requestApi(request, headers, force);
};
export const person_update = async (
  id: string,
  data: definitions["Person"] | definitions["Person"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["person_update"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/person/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "person",
    verb: "put",
  };
  return dataLayerObj.requestApi(request, headers, force, data);
};
export const person_partial_update = async (
  id: string,
  data: definitions["Person"] | definitions["Person"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["person_partial_update"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/person/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "person",
    verb: "patch",
  };
  return dataLayerObj.requestApi(request, headers, force, data);
};
export const person_delete = async (
  id: string,
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<AxiosResponse<any["schema"]>> => {
  let endpoint = _apiPrefix + "/person/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "person",
    verb: "delete",
  };
  return dataLayerObj.requestApi(request, headers, force);
};
