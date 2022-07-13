import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
import { dataLayerObj } from "../instance";
import type { RequestType } from "../instance";

export const comments_list = async (
  data: operations["comments_list"]["parameters"],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["comments_list"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/comments/";
  const request: RequestType = {
    endpoint,
    name: "comments",
    verb: "get",
  };
  return await dataLayerObj.requestApi(request, headers, force, data.query);
};
export const comments_create = async (
  data: definitions["Comments"] | definitions["Comments"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["comments_create"]["responses"][201]["schema"]>
> => {
  let endpoint = _apiPrefix + "/comments/";
  const request: RequestType = {
    endpoint,
    name: "comments",
    verb: "post",
  };
  return await dataLayerObj.requestApi(request, headers, force, data);
};
export const comments_read = async (
  id: string,
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["comments_read"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/comments/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "comments",
    verb: "get",
  };
  return await dataLayerObj.requestApi(request, headers, force);
};
export const comments_update = async (
  id: string,
  data: definitions["Comments"] | definitions["Comments"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["comments_update"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/comments/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "comments",
    verb: "put",
  };
  return dataLayerObj.requestApi(request, headers, force, data);
};
export const comments_partial_update = async (
  id: string,
  data: definitions["Comments"] | definitions["Comments"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<
    operations["comments_partial_update"]["responses"][200]["schema"]
  >
> => {
  let endpoint = _apiPrefix + "/comments/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "comments",
    verb: "patch",
  };
  return dataLayerObj.requestApi(request, headers, force, data);
};
export const comments_delete = async (
  id: string,
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<AxiosResponse<any["schema"]>> => {
  let endpoint = _apiPrefix + "/comments/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "comments",
    verb: "delete",
  };
  return dataLayerObj.requestApi(request, headers, force);
};
