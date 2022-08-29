import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
import { dataLayerObj } from "../instance";
import type { RequestType } from "../instance";

export const comment_list = async (
  data: operations["comment_list"]["parameters"],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["comment_list"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/comment/";
  const request: RequestType = {
    endpoint,
    name: "comment",
    verb: "get",
  };
  return await dataLayerObj.requestApi(request, headers, force, data.query);
};
export const comment_create = async (
  data: definitions["Comment"] | definitions["Comment"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["comment_create"]["responses"][201]["schema"]>
> => {
  let endpoint = _apiPrefix + "/comment/";
  const request: RequestType = {
    endpoint,
    name: "comment",
    verb: "post",
  };
  return await dataLayerObj.requestApi(request, headers, force, data);
};
export const comment_read = async (
  id: string,
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["comment_read"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/comment/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "comment",
    verb: "get",
  };
  return await dataLayerObj.requestApi(request, headers, force);
};
export const comment_update = async (
  id: string,
  data: definitions["Comment"] | definitions["Comment"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["comment_update"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/comment/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "comment",
    verb: "put",
  };
  return dataLayerObj.requestApi(request, headers, force, data);
};
export const comment_partial_update = async (
  id: string,
  data: definitions["Comment"] | definitions["Comment"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<
    operations["comment_partial_update"]["responses"][200]["schema"]
  >
> => {
  let endpoint = _apiPrefix + "/comment/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "comment",
    verb: "patch",
  };
  return dataLayerObj.requestApi(request, headers, force, data);
};
export const comment_delete = async (
  id: string,
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<AxiosResponse<any["schema"]>> => {
  let endpoint = _apiPrefix + "/comment/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "comment",
    verb: "delete",
  };
  return dataLayerObj.requestApi(request, headers, force);
};
