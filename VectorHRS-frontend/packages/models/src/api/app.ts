import { operations, definitions } from "../schemas";
import axios, { AxiosResponse } from "axios";

export const app_list = async (
  data: operations["app_list"]["parameters"],
  headers: any
): Promise<
  AxiosResponse<operations["app_list"]["responses"][200]["schema"]>
> => {
  let endpoint = "/api/app/";
  return await axios({
    method: "get",
    url: endpoint,
    data,
    headers,
  });
};
export const app_create = async (
  data: definitions["App"] | definitions["App"][],
  headers: any
): Promise<
  AxiosResponse<operations["app_create"]["responses"][201]["schema"]>
> => {
  let endpoint = "/api/app/";
  return await axios({
    method: "post",
    url: endpoint,
    data,
    headers,
  });
};
export const app_read = async (
  id: string,
  headers: any
): Promise<
  AxiosResponse<operations["app_read"]["responses"][200]["schema"]>
> => {
  let endpoint = "/api/app/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await axios({
    method: "get",
    url: endpoint,

    headers,
  });
};
export const app_update = async (
  id: string,
  data: definitions["App"] | definitions["App"][],
  headers: any
): Promise<
  AxiosResponse<operations["app_update"]["responses"][200]["schema"]>
> => {
  let endpoint = "/api/app/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await axios({
    method: "put",
    url: endpoint,
    data,
    headers,
  });
};
export const app_partial_update = async (
  id: string,
  data: definitions["App"] | definitions["App"][],
  headers: any
): Promise<
  AxiosResponse<operations["app_partial_update"]["responses"][200]["schema"]>
> => {
  let endpoint = "/api/app/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await axios({
    method: "patch",
    url: endpoint,
    data,
    headers,
  });
};
export const app_delete = async (
  id: string,
  headers: any
): Promise<AxiosResponse<any["schema"]>> => {
  let endpoint = "/api/app/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await axios({
    method: "delete",
    url: endpoint,

    headers,
  });
};
