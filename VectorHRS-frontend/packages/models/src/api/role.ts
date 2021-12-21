import { operations, definitions } from "../Schemas";
import axios, { AxiosResponse } from "axios";

export const role_list = async (
  data: operations["role_list"]["parameters"],
  headers: any
): Promise<
  AxiosResponse<operations["role_list"]["responses"][200]["schema"]>
> => {
  let endpoint = "/api/role/";
  return await axios({
    method: "get",
    url: endpoint,
    data,
    headers,
  });
};
export const role_create = async (
  data: definitions["Role"] | definitions["Role"][],
  headers: any
): Promise<
  AxiosResponse<operations["role_create"]["responses"][201]["schema"]>
> => {
  let endpoint = "/api/role/";
  return await axios({
    method: "post",
    url: endpoint,
    data,
    headers,
  });
};
export const role_read = async (
  id: string,
  headers: any
): Promise<
  AxiosResponse<operations["role_read"]["responses"][200]["schema"]>
> => {
  let endpoint = "/api/role/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await axios({
    method: "get",
    url: endpoint,

    headers,
  });
};
export const role_update = async (
  id: string,
  data: definitions["Role"] | definitions["Role"][],
  headers: any
): Promise<
  AxiosResponse<operations["role_update"]["responses"][200]["schema"]>
> => {
  let endpoint = "/api/role/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await axios({
    method: "put",
    url: endpoint,
    data,
    headers,
  });
};
export const role_partial_update = async (
  id: string,
  data: definitions["Role"] | definitions["Role"][],
  headers: any
): Promise<
  AxiosResponse<operations["role_partial_update"]["responses"][200]["schema"]>
> => {
  let endpoint = "/api/role/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await axios({
    method: "patch",
    url: endpoint,
    data,
    headers,
  });
};
export const role_delete = async (
  id: string,
  headers: any
): Promise<AxiosResponse<any["schema"]>> => {
  let endpoint = "/api/role/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await axios({
    method: "delete",
    url: endpoint,

    headers,
  });
};