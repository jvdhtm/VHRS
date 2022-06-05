import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
import { instance } from "../instance";

export const person_list = async (
  data: operations["person_list"]["parameters"],
  headers: any
): Promise<
  AxiosResponse<operations["person_list"]["responses"][200]["schema"]>
> => {
  let endpoint = "/api/person/";
  return await instance({
    method: "get",
    url: endpoint,
    params: data.query,
    headers,
  });
};
export const person_create = async (
  data: definitions["Person"] | definitions["Person"][],
  headers: any
): Promise<
  AxiosResponse<operations["person_create"]["responses"][201]["schema"]>
> => {
  let endpoint = "/api/person/";
  return await instance({
    method: "post",
    url: endpoint,
    data,
    headers,
  });
};
export const person_read = async (
  id: string,
  headers: any
): Promise<
  AxiosResponse<operations["person_read"]["responses"][200]["schema"]>
> => {
  let endpoint = "/api/person/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await instance({
    method: "get",
    url: endpoint,

    headers,
  });
};
export const person_update = async (
  id: string,
  data: definitions["Person"] | definitions["Person"][],
  headers: any
): Promise<
  AxiosResponse<operations["person_update"]["responses"][200]["schema"]>
> => {
  let endpoint = "/api/person/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await instance({
    method: "put",
    url: endpoint,
    data,
    headers,
  });
};
export const person_partial_update = async (
  id: string,
  data: definitions["Person"] | definitions["Person"][],
  headers: any
): Promise<
  AxiosResponse<operations["person_partial_update"]["responses"][200]["schema"]>
> => {
  let endpoint = "/api/person/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await instance({
    method: "patch",
    url: endpoint,
    data,
    headers,
  });
};
export const person_delete = async (
  id: string,
  headers: any
): Promise<AxiosResponse<any["schema"]>> => {
  let endpoint = "/api/person/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await instance({
    method: "delete",
    url: endpoint,

    headers,
  });
};
