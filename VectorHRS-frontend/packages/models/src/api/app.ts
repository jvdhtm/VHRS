import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
import { instance } from "../instance";

export const app_list = async (
  data: operations["app_list"]["parameters"],
  headers: any,
  _apiPrefix = "/api"
): Promise<
  AxiosResponse<operations["app_list"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/app/";
  return await instance({
    method: "get",
    url: endpoint,
    params: data.query,
    headers,
  });
};
export const app_create = async (
  data: definitions["App"] | definitions["App"][],
  headers: any,
  _apiPrefix = "/api"
): Promise<
  AxiosResponse<operations["app_create"]["responses"][201]["schema"]>
> => {
  let endpoint = _apiPrefix + "/app/";
  return await instance({
    method: "post",
    url: endpoint,
    data,
    headers,
  });
};
export const app_read = async (
  id: string,
  headers: any,
  _apiPrefix = "/api"
): Promise<
  AxiosResponse<operations["app_read"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/app/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await instance({
    method: "get",
    url: endpoint,

    headers,
  });
};
export const app_update = async (
  id: string,
  data: definitions["App"] | definitions["App"][],
  headers: any,
  _apiPrefix = "/api"
): Promise<
  AxiosResponse<operations["app_update"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/app/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await instance({
    method: "put",
    url: endpoint,
    data,
    headers,
  });
};
export const app_partial_update = async (
  id: string,
  data: definitions["App"] | definitions["App"][],
  headers: any,
  _apiPrefix = "/api"
): Promise<
  AxiosResponse<operations["app_partial_update"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/app/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await instance({
    method: "patch",
    url: endpoint,
    data,
    headers,
  });
};
export const app_delete = async (
  id: string,
  headers: any,
  _apiPrefix = "/api"
): Promise<AxiosResponse<any["schema"]>> => {
  let endpoint = _apiPrefix + "/app/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await instance({
    method: "delete",
    url: endpoint,

    headers,
  });
};
