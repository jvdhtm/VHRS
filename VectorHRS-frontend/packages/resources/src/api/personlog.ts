import { operations, definitions } from "../Schemas";
import axios, { AxiosResponse } from "axios";

export const personlog_list = async (
  data: operations["personlog_list"]["parameters"],
  headers: any
): Promise<AxiosResponse<operations["personlog_list"]["responses"][200]>> => {
  let endpoint = "/personlog/";
  return await axios({
    method: "get",
    url: endpoint,
    data,
    headers,
  });
};

export const personlog_create = async (
  data: definitions["PersonLog"],
  headers: any
): Promise<AxiosResponse<operations["personlog_create"]["responses"][201]>> => {
  let endpoint = "/personlog/";
  return await axios({
    method: "post",
    url: endpoint,
    data,
    headers,
  });
};

export const personlog_read = async (
  id: string,
  headers: any
): Promise<AxiosResponse<operations["personlog_read"]["responses"][200]>> => {
  let endpoint = "/personlog/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await axios({
    method: "get",
    url: endpoint,

    headers,
  });
};

export const personlog_update = async (
  id: string,
  data: definitions["PersonLog"],
  headers: any
): Promise<AxiosResponse<operations["personlog_update"]["responses"][200]>> => {
  let endpoint = "/personlog/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await axios({
    method: "put",
    url: endpoint,
    data,
    headers,
  });
};

export const personlog_partial_update = async (
  id: string,
  data: definitions["PersonLog"],
  headers: any
): Promise<
  AxiosResponse<operations["personlog_partial_update"]["responses"][200]>
> => {
  let endpoint = "/personlog/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await axios({
    method: "patch",
    url: endpoint,
    data,
    headers,
  });
};

export const personlog_delete = async (
  id: string,
  headers: any
): Promise<AxiosResponse<any>> => {
  let endpoint = "/personlog/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await axios({
    method: "delete",
    url: endpoint,

    headers,
  });
};
