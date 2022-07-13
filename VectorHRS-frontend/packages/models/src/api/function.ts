import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
import { instance } from "../instance";

export const function_list = async (
  data: operations["function_list"]["parameters"],
  headers: any,
  _apiPrefix = "/api"
): Promise<
  AxiosResponse<operations["function_list"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/function/";
  return await instance({
    method: "get",
    url: endpoint,
    params: data.query,
    headers,
  });
};
export const function_create = async (
  data: definitions["Function"] | definitions["Function"][],
  headers: any,
  _apiPrefix = "/api"
): Promise<
  AxiosResponse<operations["function_create"]["responses"][201]["schema"]>
> => {
  let endpoint = _apiPrefix + "/function/";
  return await instance({
    method: "post",
    url: endpoint,
    data,
    headers,
  });
};
export const function_read = async (
  id: string,
  headers: any,
  _apiPrefix = "/api"
): Promise<
  AxiosResponse<operations["function_read"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/function/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await instance({
    method: "get",
    url: endpoint,

    headers,
  });
};
export const function_update = async (
  id: string,
  data: definitions["Function"] | definitions["Function"][],
  headers: any,
  _apiPrefix = "/api"
): Promise<
  AxiosResponse<operations["function_update"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/function/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await instance({
    method: "put",
    url: endpoint,
    data,
    headers,
  });
};
export const function_partial_update = async (
  id: string,
  data: definitions["Function"] | definitions["Function"][],
  headers: any,
  _apiPrefix = "/api"
): Promise<
  AxiosResponse<
    operations["function_partial_update"]["responses"][200]["schema"]
  >
> => {
  let endpoint = _apiPrefix + "/function/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await instance({
    method: "patch",
    url: endpoint,
    data,
    headers,
  });
};
export const function_delete = async (
  id: string,
  headers: any,
  _apiPrefix = "/api"
): Promise<AxiosResponse<any["schema"]>> => {
  let endpoint = _apiPrefix + "/function/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await instance({
    method: "delete",
    url: endpoint,

    headers,
  });
};
