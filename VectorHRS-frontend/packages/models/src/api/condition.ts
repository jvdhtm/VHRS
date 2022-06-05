import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
import { instance } from "../instance";

export const condition_list = async (
  data: operations["condition_list"]["parameters"],
  headers: any
): Promise<
  AxiosResponse<operations["condition_list"]["responses"][200]["schema"]>
> => {
  let endpoint = "/api/condition/";
  return await instance({
    method: "get",
    url: endpoint,
    params: data.query,
    headers,
  });
};
export const condition_create = async (
  data: definitions["Condition"] | definitions["Condition"][],
  headers: any
): Promise<
  AxiosResponse<operations["condition_create"]["responses"][201]["schema"]>
> => {
  let endpoint = "/api/condition/";
  return await instance({
    method: "post",
    url: endpoint,
    data,
    headers,
  });
};
export const condition_read = async (
  id: string,
  headers: any
): Promise<
  AxiosResponse<operations["condition_read"]["responses"][200]["schema"]>
> => {
  let endpoint = "/api/condition/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await instance({
    method: "get",
    url: endpoint,

    headers,
  });
};
export const condition_update = async (
  id: string,
  data: definitions["Condition"] | definitions["Condition"][],
  headers: any
): Promise<
  AxiosResponse<operations["condition_update"]["responses"][200]["schema"]>
> => {
  let endpoint = "/api/condition/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await instance({
    method: "put",
    url: endpoint,
    data,
    headers,
  });
};
export const condition_partial_update = async (
  id: string,
  data: definitions["Condition"] | definitions["Condition"][],
  headers: any
): Promise<
  AxiosResponse<
    operations["condition_partial_update"]["responses"][200]["schema"]
  >
> => {
  let endpoint = "/api/condition/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await instance({
    method: "patch",
    url: endpoint,
    data,
    headers,
  });
};
export const condition_delete = async (
  id: string,
  headers: any
): Promise<AxiosResponse<any["schema"]>> => {
  let endpoint = "/api/condition/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await instance({
    method: "delete",
    url: endpoint,

    headers,
  });
};
