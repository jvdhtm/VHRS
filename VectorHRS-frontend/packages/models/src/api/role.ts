import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
import { instance } from "../instance";

export const role_list = async (
  data: operations["role_list"]["parameters"],
  headers: any,
  _apiPrefix = "/api"
): Promise<
  AxiosResponse<operations["role_list"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/role/";
  return await instance({
    method: "get",
    url: endpoint,
    params: data.query,
    headers,
  });
};
export const role_create = async (
  data: definitions["Role"] | definitions["Role"][],
  headers: any,
  _apiPrefix = "/api"
): Promise<
  AxiosResponse<operations["role_create"]["responses"][201]["schema"]>
> => {
  let endpoint = _apiPrefix + "/role/";
  return await instance({
    method: "post",
    url: endpoint,
    data,
    headers,
  });
};
export const role_read = async (
  id: string,
  headers: any,
  _apiPrefix = "/api"
): Promise<
  AxiosResponse<operations["role_read"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/role/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await instance({
    method: "get",
    url: endpoint,

    headers,
  });
};
export const role_update = async (
  id: string,
  data: definitions["Role"] | definitions["Role"][],
  headers: any,
  _apiPrefix = "/api"
): Promise<
  AxiosResponse<operations["role_update"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/role/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await instance({
    method: "put",
    url: endpoint,
    data,
    headers,
  });
};
export const role_partial_update = async (
  id: string,
  data: definitions["Role"] | definitions["Role"][],
  headers: any,
  _apiPrefix = "/api"
): Promise<
  AxiosResponse<operations["role_partial_update"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/role/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await instance({
    method: "patch",
    url: endpoint,
    data,
    headers,
  });
};
export const role_delete = async (
  id: string,
  headers: any,
  _apiPrefix = "/api"
): Promise<AxiosResponse<any["schema"]>> => {
  let endpoint = _apiPrefix + "/role/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await instance({
    method: "delete",
    url: endpoint,

    headers,
  });
};
