import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
import { dataLayerObj } from "../instance";
import type { RequestType } from "../instance";

export const question_list = async (
  data: operations["question_list"]["parameters"],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["question_list"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/question/";
  const request: RequestType = {
    endpoint,
    name: "question",
    verb: "get",
  };
  return await dataLayerObj.requestApi(request, headers, force, data.query);
};
export const question_create = async (
  data: definitions["Question"] | definitions["Question"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["question_create"]["responses"][201]["schema"]>
> => {
  let endpoint = _apiPrefix + "/question/";
  const request: RequestType = {
    endpoint,
    name: "question",
    verb: "post",
  };
  return await dataLayerObj.requestApi(request, headers, force, data);
};
export const question_read = async (
  id: string,
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["question_read"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/question/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "question",
    verb: "get",
  };
  return await dataLayerObj.requestApi(request, headers, force);
};
export const question_update = async (
  id: string,
  data: definitions["Question"] | definitions["Question"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["question_update"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/question/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "question",
    verb: "put",
  };
  return dataLayerObj.requestApi(request, headers, force, data);
};
export const question_partial_update = async (
  id: string,
  data: definitions["Question"] | definitions["Question"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<
    operations["question_partial_update"]["responses"][200]["schema"]
  >
> => {
  let endpoint = _apiPrefix + "/question/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "question",
    verb: "patch",
  };
  return dataLayerObj.requestApi(request, headers, force, data);
};
export const question_delete = async (
  id: string,
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<AxiosResponse<any["schema"]>> => {
  let endpoint = _apiPrefix + "/question/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "question",
    verb: "delete",
  };
  return dataLayerObj.requestApi(request, headers, force);
};
