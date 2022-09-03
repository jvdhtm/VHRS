import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
import { dataLayerObj } from "../instance";
import type { RequestType } from "../instance";

export const questions_list = async (
  data: operations["questions_list"]["parameters"],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["questions_list"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/questions/";
  const request: RequestType = {
    endpoint,
    name: "questions",
    verb: "get",
  };
  return await dataLayerObj.requestApi(request, headers, force, data.query);
};
export const questions_create = async (
  data: definitions["Questions"] | definitions["Questions"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["questions_create"]["responses"][201]["schema"]>
> => {
  let endpoint = _apiPrefix + "/questions/";
  const request: RequestType = {
    endpoint,
    name: "questions",
    verb: "post",
  };
  return await dataLayerObj.requestApi(request, headers, force, data);
};
export const questions_read = async (
  id: string,
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["questions_read"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/questions/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "questions",
    verb: "get",
  };
  return await dataLayerObj.requestApi(request, headers, force);
};
export const questions_update = async (
  id: string,
  data: definitions["Questions"] | definitions["Questions"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["questions_update"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/questions/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "questions",
    verb: "put",
  };
  return dataLayerObj.requestApi(request, headers, force, data);
};
export const questions_partial_update = async (
  id: string,
  data: definitions["Questions"] | definitions["Questions"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<
    operations["questions_partial_update"]["responses"][200]["schema"]
  >
> => {
  let endpoint = _apiPrefix + "/questions/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "questions",
    verb: "patch",
  };
  return dataLayerObj.requestApi(request, headers, force, data);
};
export const questions_delete = async (
  id: string,
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<AxiosResponse<any["schema"]>> => {
  let endpoint = _apiPrefix + "/questions/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "questions",
    verb: "delete",
  };
  return dataLayerObj.requestApi(request, headers, force);
};
