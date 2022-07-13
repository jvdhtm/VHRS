import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
import { instance } from "../instance";

export const user_list = async (
  data: operations["user_list"]["parameters"],
  headers: any,
  _apiPrefix = "/api"
): Promise<
  AxiosResponse<operations["user_list"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/user/";
  return await instance({
    method: "get",
    url: endpoint,
    params: data.query,
    headers,
  });
};
export const user_create = async (
  data: definitions["User"] | definitions["User"][],
  headers: any,
  _apiPrefix = "/api"
): Promise<
  AxiosResponse<operations["user_create"]["responses"][201]["schema"]>
> => {
  let endpoint = _apiPrefix + "/user/";
  return await instance({
    method: "post",
    url: endpoint,
    data,
    headers,
  });
};
export const user_read = async (
  id: string,
  headers: any,
  _apiPrefix = "/api"
): Promise<
  AxiosResponse<operations["user_read"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/user/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await instance({
    method: "get",
    url: endpoint,

    headers,
  });
};
export const user_update = async (
  id: string,
  data: definitions["User"] | definitions["User"][],
  headers: any,
  _apiPrefix = "/api"
): Promise<
  AxiosResponse<operations["user_update"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/user/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await instance({
    method: "put",
    url: endpoint,
    data,
    headers,
  });
};
export const user_partial_update = async (
  id: string,
  data: definitions["User"] | definitions["User"][],
  headers: any,
  _apiPrefix = "/api"
): Promise<
  AxiosResponse<operations["user_partial_update"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/user/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await instance({
    method: "patch",
    url: endpoint,
    data,
    headers,
  });
};
export const user_delete = async (
  id: string,
  headers: any,
  _apiPrefix = "/api"
): Promise<AxiosResponse<any["schema"]>> => {
  let endpoint = _apiPrefix + "/user/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await instance({
    method: "delete",
    url: endpoint,

    headers,
  });
};
