import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
import { dataLayerObj } from "../instance";
import type { RequestType } from "../instance";

export const staffcomment_list = async (
  data: operations["staffcomment_list"]["parameters"],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["staffcomment_list"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/staffcomment/";
  const request: RequestType = {
    endpoint,
    name: "staffcomment",
    verb: "get",
  };
  return await dataLayerObj.requestApi(request, headers, force, data.query);
};
export const staffcomment_create = async (
  data: definitions["StaffComment"] | definitions["StaffComment"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["staffcomment_create"]["responses"][201]["schema"]>
> => {
  let endpoint = _apiPrefix + "/staffcomment/";
  const request: RequestType = {
    endpoint,
    name: "staffcomment",
    verb: "post",
  };
  return await dataLayerObj.requestApi(request, headers, force, data);
};
export const staffcomment_read = async (
  id: string,
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["staffcomment_read"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/staffcomment/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "staffcomment",
    verb: "get",
  };
  return await dataLayerObj.requestApi(request, headers, force);
};
export const staffcomment_update = async (
  id: string,
  data: definitions["StaffComment"] | definitions["StaffComment"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["staffcomment_update"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/staffcomment/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "staffcomment",
    verb: "put",
  };
  return dataLayerObj.requestApi(request, headers, force, data);
};
export const staffcomment_partial_update = async (
  id: string,
  data: definitions["StaffComment"] | definitions["StaffComment"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<
    operations["staffcomment_partial_update"]["responses"][200]["schema"]
  >
> => {
  let endpoint = _apiPrefix + "/staffcomment/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "staffcomment",
    verb: "patch",
  };
  return dataLayerObj.requestApi(request, headers, force, data);
};
export const staffcomment_delete = async (
  id: string,
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<AxiosResponse<any["schema"]>> => {
  let endpoint = _apiPrefix + "/staffcomment/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "staffcomment",
    verb: "delete",
  };
  return dataLayerObj.requestApi(request, headers, force);
};
