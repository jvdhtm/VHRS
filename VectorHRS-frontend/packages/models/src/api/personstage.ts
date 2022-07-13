import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
import { dataLayerObj } from "../instance";
import type { RequestType } from "../instance";

export const personstage_list = async (
  data: operations["personstage_list"]["parameters"],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["personstage_list"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/personstage/";
  const request: RequestType = {
    endpoint,
    name: "personstage",
    verb: "get",
  };
  return await dataLayerObj.requestApi(request, headers, force, data.query);
};
export const personstage_create = async (
  data: definitions["PersonStage"] | definitions["PersonStage"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["personstage_create"]["responses"][201]["schema"]>
> => {
  let endpoint = _apiPrefix + "/personstage/";
  const request: RequestType = {
    endpoint,
    name: "personstage",
    verb: "post",
  };
  return await dataLayerObj.requestApi(request, headers, force, data);
};
export const personstage_read = async (
  id: string,
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["personstage_read"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/personstage/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "personstage",
    verb: "get",
  };
  return await dataLayerObj.requestApi(request, headers, force);
};
export const personstage_update = async (
  id: string,
  data: definitions["PersonStage"] | definitions["PersonStage"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["personstage_update"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/personstage/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "personstage",
    verb: "put",
  };
  return dataLayerObj.requestApi(request, headers, force, data);
};
export const personstage_partial_update = async (
  id: string,
  data: definitions["PersonStage"] | definitions["PersonStage"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<
    operations["personstage_partial_update"]["responses"][200]["schema"]
  >
> => {
  let endpoint = _apiPrefix + "/personstage/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "personstage",
    verb: "patch",
  };
  return dataLayerObj.requestApi(request, headers, force, data);
};
export const personstage_delete = async (
  id: string,
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<AxiosResponse<any["schema"]>> => {
  let endpoint = _apiPrefix + "/personstage/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "personstage",
    verb: "delete",
  };
  return dataLayerObj.requestApi(request, headers, force);
};
