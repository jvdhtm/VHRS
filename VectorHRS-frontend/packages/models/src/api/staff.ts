import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
import { instance } from "../instance";

export const staff_list = async (
  data: operations["staff_list"]["parameters"],
  headers: any,
  _apiPrefix = "/api"
): Promise<
  AxiosResponse<operations["staff_list"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/staff/";
  return await instance({
    method: "get",
    url: endpoint,
    params: data.query,
    headers,
  });
};
export const staff_create = async (
  data: definitions["Staff"] | definitions["Staff"][],
  headers: any,
  _apiPrefix = "/api"
): Promise<
  AxiosResponse<operations["staff_create"]["responses"][201]["schema"]>
> => {
  let endpoint = _apiPrefix + "/staff/";
  return await instance({
    method: "post",
    url: endpoint,
    data,
    headers,
  });
};
export const staff_read = async (
  id: string,
  headers: any,
  _apiPrefix = "/api"
): Promise<
  AxiosResponse<operations["staff_read"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/staff/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await instance({
    method: "get",
    url: endpoint,

    headers,
  });
};
export const staff_update = async (
  id: string,
  data: definitions["Staff"] | definitions["Staff"][],
  headers: any,
  _apiPrefix = "/api"
): Promise<
  AxiosResponse<operations["staff_update"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/staff/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await instance({
    method: "put",
    url: endpoint,
    data,
    headers,
  });
};
export const staff_partial_update = async (
  id: string,
  data: definitions["Staff"] | definitions["Staff"][],
  headers: any,
  _apiPrefix = "/api"
): Promise<
  AxiosResponse<operations["staff_partial_update"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/staff/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await instance({
    method: "patch",
    url: endpoint,
    data,
    headers,
  });
};
export const staff_delete = async (
  id: string,
  headers: any,
  _apiPrefix = "/api"
): Promise<AxiosResponse<any["schema"]>> => {
  let endpoint = _apiPrefix + "/staff/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await instance({
    method: "delete",
    url: endpoint,

    headers,
  });
};
