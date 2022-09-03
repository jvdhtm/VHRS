import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
import { dataLayerObj } from "../instance";
import type { RequestType } from "../instance";

export const answers_list = async (
  data: operations["answers_list"]["parameters"],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["answers_list"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/answers/";
  const request: RequestType = {
    endpoint,
    name: "answers",
    verb: "get",
  };
  return await dataLayerObj.requestApi(request, headers, force, data.query);
};
export const answers_create = async (
  data: definitions["answers"] | definitions["answers"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["answers_create"]["responses"][201]["schema"]>
> => {
  let endpoint = _apiPrefix + "/answers/";
  const request: RequestType = {
    endpoint,
    name: "answers",
    verb: "post",
  };
  return await dataLayerObj.requestApi(request, headers, force, data);
};
export const answers_read = async (
  id: string,
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["answers_read"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/answers/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "answers",
    verb: "get",
  };
  return await dataLayerObj.requestApi(request, headers, force);
};
export const answers_update = async (
  id: string,
  data: definitions["answers"] | definitions["answers"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["answers_update"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/answers/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "answers",
    verb: "put",
  };
  return dataLayerObj.requestApi(request, headers, force, data);
};
export const answers_partial_update = async (
  id: string,
  data: definitions["answers"] | definitions["answers"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<
    operations["answers_partial_update"]["responses"][200]["schema"]
  >
> => {
  let endpoint = _apiPrefix + "/answers/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "answers",
    verb: "patch",
  };
  return dataLayerObj.requestApi(request, headers, force, data);
};
export const answers_delete = async (
  id: string,
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<AxiosResponse<any["schema"]>> => {
  let endpoint = _apiPrefix + "/answers/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "answers",
    verb: "delete",
  };
  return dataLayerObj.requestApi(request, headers, force);
};
