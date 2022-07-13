import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
import { instance } from "../instance";

export const stafffunctions_list = async (
  data: operations["stafffunctions_list"]["parameters"],
  headers: any,
  _apiPrefix = "/api"
): Promise<
  AxiosResponse<operations["stafffunctions_list"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/stafffunctions/";
  return await instance({
    method: "get",
    url: endpoint,
    params: data.query,
    headers,
  });
};
export const stafffunctions_create = async (
  data: definitions["StaffFunctions"] | definitions["StaffFunctions"][],
  headers: any,
  _apiPrefix = "/api"
): Promise<
  AxiosResponse<operations["stafffunctions_create"]["responses"][201]["schema"]>
> => {
  let endpoint = _apiPrefix + "/stafffunctions/";
  return await instance({
    method: "post",
    url: endpoint,
    data,
    headers,
  });
};
export const stafffunctions_read = async (
  id: string,
  headers: any,
  _apiPrefix = "/api"
): Promise<
  AxiosResponse<operations["stafffunctions_read"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/stafffunctions/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await instance({
    method: "get",
    url: endpoint,

    headers,
  });
};
export const stafffunctions_update = async (
  id: string,
  data: definitions["StaffFunctions"] | definitions["StaffFunctions"][],
  headers: any,
  _apiPrefix = "/api"
): Promise<
  AxiosResponse<operations["stafffunctions_update"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/stafffunctions/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await instance({
    method: "put",
    url: endpoint,
    data,
    headers,
  });
};
export const stafffunctions_partial_update = async (
  id: string,
  data: definitions["StaffFunctions"] | definitions["StaffFunctions"][],
  headers: any,
  _apiPrefix = "/api"
): Promise<
  AxiosResponse<
    operations["stafffunctions_partial_update"]["responses"][200]["schema"]
  >
> => {
  let endpoint = _apiPrefix + "/stafffunctions/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await instance({
    method: "patch",
    url: endpoint,
    data,
    headers,
  });
};
export const stafffunctions_delete = async (
  id: string,
  headers: any,
  _apiPrefix = "/api"
): Promise<AxiosResponse<any["schema"]>> => {
  let endpoint = _apiPrefix + "/stafffunctions/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await instance({
    method: "delete",
    url: endpoint,

    headers,
  });
};
