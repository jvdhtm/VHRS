import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
import { dataLayerObj } from "../instance";
import type { RequestType } from "../instance";

export const expertiseprofile_list = async (
  data: operations["expertiseprofile_list"]["parameters"],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["expertiseprofile_list"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/expertiseprofile/";
  const request: RequestType = {
    endpoint,
    name: "expertiseprofile",
    verb: "get",
  };
  return await dataLayerObj.requestApi(request, headers, force, data.query);
};
export const expertiseprofile_create = async (
  data: definitions["ExpertiseProfile"] | definitions["ExpertiseProfile"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<
    operations["expertiseprofile_create"]["responses"][201]["schema"]
  >
> => {
  let endpoint = _apiPrefix + "/expertiseprofile/";
  const request: RequestType = {
    endpoint,
    name: "expertiseprofile",
    verb: "post",
  };
  return await dataLayerObj.requestApi(request, headers, force, data);
};
export const expertiseprofile_read = async (
  id: string,
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["expertiseprofile_read"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/expertiseprofile/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "expertiseprofile",
    verb: "get",
  };
  return await dataLayerObj.requestApi(request, headers, force);
};
export const expertiseprofile_update = async (
  id: string,
  data: definitions["ExpertiseProfile"] | definitions["ExpertiseProfile"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<
    operations["expertiseprofile_update"]["responses"][200]["schema"]
  >
> => {
  let endpoint = _apiPrefix + "/expertiseprofile/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "expertiseprofile",
    verb: "put",
  };
  return dataLayerObj.requestApi(request, headers, force, data);
};
export const expertiseprofile_partial_update = async (
  id: string,
  data: definitions["ExpertiseProfile"] | definitions["ExpertiseProfile"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<
    operations["expertiseprofile_partial_update"]["responses"][200]["schema"]
  >
> => {
  let endpoint = _apiPrefix + "/expertiseprofile/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "expertiseprofile",
    verb: "patch",
  };
  return dataLayerObj.requestApi(request, headers, force, data);
};
export const expertiseprofile_delete = async (
  id: string,
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<AxiosResponse<any["schema"]>> => {
  let endpoint = _apiPrefix + "/expertiseprofile/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "expertiseprofile",
    verb: "delete",
  };
  return dataLayerObj.requestApi(request, headers, force);
};
