import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
import { dataLayerObj } from "../instance";
import type { RequestType } from "../instance";

export const newsletter_list = async (
  data: operations["newsletter_list"]["parameters"],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["newsletter_list"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/newsletter/";
  const request: RequestType = {
    endpoint,
    name: "newsletter",
    verb: "get",
  };
  return await dataLayerObj.requestApi(request, headers, force, data.query);
};
export const newsletter_create = async (
  data: definitions["NewsLetter"] | definitions["NewsLetter"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["newsletter_create"]["responses"][201]["schema"]>
> => {
  let endpoint = _apiPrefix + "/newsletter/";
  const request: RequestType = {
    endpoint,
    name: "newsletter",
    verb: "post",
  };
  return await dataLayerObj.requestApi(request, headers, force, data);
};
export const newsletter_read = async (
  id: string,
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["newsletter_read"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/newsletter/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "newsletter",
    verb: "get",
  };
  return await dataLayerObj.requestApi(request, headers, force);
};
export const newsletter_update = async (
  id: string,
  data: definitions["NewsLetter"] | definitions["NewsLetter"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["newsletter_update"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/newsletter/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "newsletter",
    verb: "put",
  };
  return dataLayerObj.requestApi(request, headers, force, data);
};
export const newsletter_partial_update = async (
  id: string,
  data: definitions["NewsLetter"] | definitions["NewsLetter"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<
    operations["newsletter_partial_update"]["responses"][200]["schema"]
  >
> => {
  let endpoint = _apiPrefix + "/newsletter/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "newsletter",
    verb: "patch",
  };
  return dataLayerObj.requestApi(request, headers, force, data);
};
export const newsletter_delete = async (
  id: string,
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<AxiosResponse<any["schema"]>> => {
  let endpoint = _apiPrefix + "/newsletter/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "newsletter",
    verb: "delete",
  };
  return dataLayerObj.requestApi(request, headers, force);
};
