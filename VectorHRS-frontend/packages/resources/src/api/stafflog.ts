import { operations, definitions } from "../Schemas";
import axios, { AxiosResponse } from "axios";

export const stafflog_list = async (
  data: operations["stafflog_list"]["parameters"],
  headers: any
): Promise<AxiosResponse<operations["stafflog_list"]["responses"][200]>> => {
  let endpoint = "/stafflog/";
  return await axios({
    method: "get",
    url: endpoint,
    data,
    headers,
  });
};
export const stafflog_create = async (
  data: definitions["StaffLog"],
  headers: any
): Promise<AxiosResponse<operations["stafflog_create"]["responses"][201]>> => {
  let endpoint = "/stafflog/";
  return await axios({
    method: "post",
    url: endpoint,
    data,
    headers,
  });
};
export const stafflog_read = async (
  id: string,
  headers: any
): Promise<AxiosResponse<operations["stafflog_read"]["responses"][200]>> => {
  let endpoint = "/stafflog/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await axios({
    method: "get",
    url: endpoint,

    headers,
  });
};
export const stafflog_update = async (
  id: string,
  data: definitions["StaffLog"],
  headers: any
): Promise<AxiosResponse<operations["stafflog_update"]["responses"][200]>> => {
  let endpoint = "/stafflog/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await axios({
    method: "put",
    url: endpoint,
    data,
    headers,
  });
};
export const stafflog_partial_update = async (
  id: string,
  data: definitions["StaffLog"],
  headers: any
): Promise<
  AxiosResponse<operations["stafflog_partial_update"]["responses"][200]>
> => {
  let endpoint = "/stafflog/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await axios({
    method: "patch",
    url: endpoint,
    data,
    headers,
  });
};
export const stafflog_delete = async (
  id: string,
  headers: any
): Promise<AxiosResponse<any>> => {
  let endpoint = "/stafflog/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await axios({
    method: "delete",
    url: endpoint,

    headers,
  });
};
