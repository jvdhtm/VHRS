import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
import { instance } from "../instance";

export const phone_list = async (
  data: operations["phone_list"]["parameters"],
  headers: any,
  _apiPrefix = "/api"
): Promise<
  AxiosResponse<operations["phone_list"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/phone/";
  return await instance({
    method: "get",
    url: endpoint,
    params: data.query,
    headers,
  });
};
export const phone_create = async (
  data: definitions["Phone"] | definitions["Phone"][],
  headers: any,
  _apiPrefix = "/api"
): Promise<
  AxiosResponse<operations["phone_create"]["responses"][201]["schema"]>
> => {
  let endpoint = _apiPrefix + "/phone/";
  return await instance({
    method: "post",
    url: endpoint,
    data,
    headers,
  });
};
export const phone_read = async (
  id: string,
  headers: any,
  _apiPrefix = "/api"
): Promise<
  AxiosResponse<operations["phone_read"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/phone/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await instance({
    method: "get",
    url: endpoint,

    headers,
  });
};
export const phone_update = async (
  id: string,
  data: definitions["Phone"] | definitions["Phone"][],
  headers: any,
  _apiPrefix = "/api"
): Promise<
  AxiosResponse<operations["phone_update"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/phone/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await instance({
    method: "put",
    url: endpoint,
    data,
    headers,
  });
};
export const phone_partial_update = async (
  id: string,
  data: definitions["Phone"] | definitions["Phone"][],
  headers: any,
  _apiPrefix = "/api"
): Promise<
  AxiosResponse<operations["phone_partial_update"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/phone/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await instance({
    method: "patch",
    url: endpoint,
    data,
    headers,
  });
};
export const phone_delete = async (
  id: string,
  headers: any,
  _apiPrefix = "/api"
): Promise<AxiosResponse<any["schema"]>> => {
  let endpoint = _apiPrefix + "/phone/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await instance({
    method: "delete",
    url: endpoint,

    headers,
  });
};
