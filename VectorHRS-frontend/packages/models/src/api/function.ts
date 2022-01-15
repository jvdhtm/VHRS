import { operations, definitions } from "../schemas";
import axios, { AxiosResponse } from "axios";

export const function_list = async (
  data: operations["function_list"]["parameters"],
  headers: any
): Promise<
  AxiosResponse<operations["function_list"]["responses"][200]["schema"]>
> => {
  let endpoint = "/api/function/";
  return await axios({
    method: "get",
    url: endpoint,
    data,
    headers,
  });
};
export const function_create = async (
  data: definitions["Function"] | definitions["Function"][],
  headers: any
): Promise<
  AxiosResponse<operations["function_create"]["responses"][201]["schema"]>
> => {
  let endpoint = "/api/function/";
  return await axios({
    method: "post",
    url: endpoint,
    data,
    headers,
  });
};
export const function_read = async (
  id: string,
  headers: any
): Promise<
  AxiosResponse<operations["function_read"]["responses"][200]["schema"]>
> => {
  let endpoint = "/api/function/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await axios({
    method: "get",
    url: endpoint,

    headers,
  });
};
export const function_update = async (
  id: string,
  data: definitions["Function"] | definitions["Function"][],
  headers: any
): Promise<
  AxiosResponse<operations["function_update"]["responses"][200]["schema"]>
> => {
  let endpoint = "/api/function/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await axios({
    method: "put",
    url: endpoint,
    data,
    headers,
  });
};
export const function_partial_update = async (
  id: string,
  data: definitions["Function"] | definitions["Function"][],
  headers: any
): Promise<
  AxiosResponse<
    operations["function_partial_update"]["responses"][200]["schema"]
  >
> => {
  let endpoint = "/api/function/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await axios({
    method: "patch",
    url: endpoint,
    data,
    headers,
  });
};
export const function_delete = async (
  id: string,
  headers: any
): Promise<AxiosResponse<any["schema"]>> => {
  let endpoint = "/api/function/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await axios({
    method: "delete",
    url: endpoint,

    headers,
  });
};
