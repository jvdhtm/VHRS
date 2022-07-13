import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
import { dataLayerObj } from "../instance";
import type { RequestType } from "../instance";

export const stafflog_list = async (
  data: operations["stafflog_list"]["parameters"],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["stafflog_list"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/stafflog/";
  const request: RequestType = {
    endpoint,
    name: "stafflog",
    verb: "get",
  };
  return await dataLayerObj.requestApi(request, headers, force, data.query);
};
export const stafflog_create = async (
  data: definitions["StaffLog"] | definitions["StaffLog"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["stafflog_create"]["responses"][201]["schema"]>
> => {
  let endpoint = _apiPrefix + "/stafflog/";
  const request: RequestType = {
    endpoint,
    name: "stafflog",
    verb: "post",
  };
  return await dataLayerObj.requestApi(request, headers, force, data);
};
export const stafflog_read = async (
  id: string,
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["stafflog_read"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/stafflog/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "stafflog",
    verb: "get",
  };
  return await dataLayerObj.requestApi(request, headers, force);
};
export const stafflog_update = async (
  id: string,
  data: definitions["StaffLog"] | definitions["StaffLog"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["stafflog_update"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/stafflog/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "stafflog",
    verb: "put",
  };
  return dataLayerObj.requestApi(request, headers, force, data);
};
export const stafflog_partial_update = async (
  id: string,
  data: definitions["StaffLog"] | definitions["StaffLog"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<
    operations["stafflog_partial_update"]["responses"][200]["schema"]
  >
> => {
  let endpoint = _apiPrefix + "/stafflog/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "stafflog",
    verb: "patch",
  };
  return dataLayerObj.requestApi(request, headers, force, data);
};
export const stafflog_delete = async (
  id: string,
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<AxiosResponse<any["schema"]>> => {
  let endpoint = _apiPrefix + "/stafflog/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "stafflog",
    verb: "delete",
  };
  return dataLayerObj.requestApi(request, headers, force);
};
