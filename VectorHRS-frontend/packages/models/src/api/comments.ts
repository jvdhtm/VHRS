import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
import { instance } from "../instance";

export const comments_list = async (
  data: operations["comments_list"]["parameters"],
  headers: any
): Promise<
  AxiosResponse<operations["comments_list"]["responses"][200]["schema"]>
> => {
  let endpoint = "/api/comments/";
  return await instance({
    method: "get",
    url: endpoint,
    params: data.query,
    headers,
  });
};
export const comments_create = async (
  data: definitions["Comments"] | definitions["Comments"][],
  headers: any
): Promise<
  AxiosResponse<operations["comments_create"]["responses"][201]["schema"]>
> => {
  let endpoint = "/api/comments/";
  return await instance({
    method: "post",
    url: endpoint,
    data,
    headers,
  });
};
export const comments_read = async (
  id: string,
  headers: any
): Promise<
  AxiosResponse<operations["comments_read"]["responses"][200]["schema"]>
> => {
  let endpoint = "/api/comments/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await instance({
    method: "get",
    url: endpoint,

    headers,
  });
};
export const comments_update = async (
  id: string,
  data: definitions["Comments"] | definitions["Comments"][],
  headers: any
): Promise<
  AxiosResponse<operations["comments_update"]["responses"][200]["schema"]>
> => {
  let endpoint = "/api/comments/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await instance({
    method: "put",
    url: endpoint,
    data,
    headers,
  });
};
export const comments_partial_update = async (
  id: string,
  data: definitions["Comments"] | definitions["Comments"][],
  headers: any
): Promise<
  AxiosResponse<
    operations["comments_partial_update"]["responses"][200]["schema"]
  >
> => {
  let endpoint = "/api/comments/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await instance({
    method: "patch",
    url: endpoint,
    data,
    headers,
  });
};
export const comments_delete = async (
  id: string,
  headers: any
): Promise<AxiosResponse<any["schema"]>> => {
  let endpoint = "/api/comments/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await instance({
    method: "delete",
    url: endpoint,

    headers,
  });
};
