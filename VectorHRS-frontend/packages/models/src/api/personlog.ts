import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
import { instance } from "../instance";

export const personlog_list = async (
  data: operations["personlog_list"]["parameters"],
  headers: any,
  _apiPrefix = "/api"
): Promise<
  AxiosResponse<operations["personlog_list"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/personlog/";
  return await instance({
    method: "get",
    url: endpoint,
    params: data.query,
    headers,
  });
};
export const personlog_create = async (
  data: definitions["PersonLog"] | definitions["PersonLog"][],
  headers: any,
  _apiPrefix = "/api"
): Promise<
  AxiosResponse<operations["personlog_create"]["responses"][201]["schema"]>
> => {
  let endpoint = _apiPrefix + "/personlog/";
  return await instance({
    method: "post",
    url: endpoint,
    data,
    headers,
  });
};
export const personlog_read = async (
  id: string,
  headers: any,
  _apiPrefix = "/api"
): Promise<
  AxiosResponse<operations["personlog_read"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/personlog/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await instance({
    method: "get",
    url: endpoint,

    headers,
  });
};
export const personlog_update = async (
  id: string,
  data: definitions["PersonLog"] | definitions["PersonLog"][],
  headers: any,
  _apiPrefix = "/api"
): Promise<
  AxiosResponse<operations["personlog_update"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/personlog/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await instance({
    method: "put",
    url: endpoint,
    data,
    headers,
  });
};
export const personlog_partial_update = async (
  id: string,
  data: definitions["PersonLog"] | definitions["PersonLog"][],
  headers: any,
  _apiPrefix = "/api"
): Promise<
  AxiosResponse<
    operations["personlog_partial_update"]["responses"][200]["schema"]
  >
> => {
  let endpoint = _apiPrefix + "/personlog/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await instance({
    method: "patch",
    url: endpoint,
    data,
    headers,
  });
};
export const personlog_delete = async (
  id: string,
  headers: any,
  _apiPrefix = "/api"
): Promise<AxiosResponse<any["schema"]>> => {
  let endpoint = _apiPrefix + "/personlog/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await instance({
    method: "delete",
    url: endpoint,

    headers,
  });
};
