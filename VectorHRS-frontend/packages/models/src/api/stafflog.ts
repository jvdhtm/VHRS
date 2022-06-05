import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
import { instance } from "../instance";

export const stafflog_list = async (
  data: operations["stafflog_list"]["parameters"],
  headers: any
): Promise<
  AxiosResponse<operations["stafflog_list"]["responses"][200]["schema"]>
> => {
  let endpoint = "/api/stafflog/";
  return await instance({
    method: "get",
    url: endpoint,
    params: data.query,
    headers,
  });
};
export const stafflog_create = async (
  data: definitions["StaffLog"] | definitions["StaffLog"][],
  headers: any
): Promise<
  AxiosResponse<operations["stafflog_create"]["responses"][201]["schema"]>
> => {
  let endpoint = "/api/stafflog/";
  return await instance({
    method: "post",
    url: endpoint,
    data,
    headers,
  });
};
export const stafflog_read = async (
  id: string,
  headers: any
): Promise<
  AxiosResponse<operations["stafflog_read"]["responses"][200]["schema"]>
> => {
  let endpoint = "/api/stafflog/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await instance({
    method: "get",
    url: endpoint,

    headers,
  });
};
export const stafflog_update = async (
  id: string,
  data: definitions["StaffLog"] | definitions["StaffLog"][],
  headers: any
): Promise<
  AxiosResponse<operations["stafflog_update"]["responses"][200]["schema"]>
> => {
  let endpoint = "/api/stafflog/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await instance({
    method: "put",
    url: endpoint,
    data,
    headers,
  });
};
export const stafflog_partial_update = async (
  id: string,
  data: definitions["StaffLog"] | definitions["StaffLog"][],
  headers: any
): Promise<
  AxiosResponse<
    operations["stafflog_partial_update"]["responses"][200]["schema"]
  >
> => {
  let endpoint = "/api/stafflog/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await instance({
    method: "patch",
    url: endpoint,
    data,
    headers,
  });
};
export const stafflog_delete = async (
  id: string,
  headers: any
): Promise<AxiosResponse<any["schema"]>> => {
  let endpoint = "/api/stafflog/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await instance({
    method: "delete",
    url: endpoint,

    headers,
  });
};
