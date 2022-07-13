import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
import { instance } from "../instance";

export const expertise_list = async (
  data: operations["expertise_list"]["parameters"],
  headers: any,
  _apiPrefix = "/api"
): Promise<
  AxiosResponse<operations["expertise_list"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/expertise/";
  return await instance({
    method: "get",
    url: endpoint,
    params: data.query,
    headers,
  });
};
export const expertise_create = async (
  data: definitions["Expertise"] | definitions["Expertise"][],
  headers: any,
  _apiPrefix = "/api"
): Promise<
  AxiosResponse<operations["expertise_create"]["responses"][201]["schema"]>
> => {
  let endpoint = _apiPrefix + "/expertise/";
  return await instance({
    method: "post",
    url: endpoint,
    data,
    headers,
  });
};
export const expertise_read = async (
  id: string,
  headers: any,
  _apiPrefix = "/api"
): Promise<
  AxiosResponse<operations["expertise_read"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/expertise/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await instance({
    method: "get",
    url: endpoint,

    headers,
  });
};
export const expertise_update = async (
  id: string,
  data: definitions["Expertise"] | definitions["Expertise"][],
  headers: any,
  _apiPrefix = "/api"
): Promise<
  AxiosResponse<operations["expertise_update"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/expertise/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await instance({
    method: "put",
    url: endpoint,
    data,
    headers,
  });
};
export const expertise_partial_update = async (
  id: string,
  data: definitions["Expertise"] | definitions["Expertise"][],
  headers: any,
  _apiPrefix = "/api"
): Promise<
  AxiosResponse<
    operations["expertise_partial_update"]["responses"][200]["schema"]
  >
> => {
  let endpoint = _apiPrefix + "/expertise/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await instance({
    method: "patch",
    url: endpoint,
    data,
    headers,
  });
};
export const expertise_delete = async (
  id: string,
  headers: any,
  _apiPrefix = "/api"
): Promise<AxiosResponse<any["schema"]>> => {
  let endpoint = _apiPrefix + "/expertise/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await instance({
    method: "delete",
    url: endpoint,

    headers,
  });
};
