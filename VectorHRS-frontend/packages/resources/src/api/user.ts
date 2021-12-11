import { operations, definitions } from "../Schemas";
import axios, { AxiosResponse } from "axios";

export const user_list = async (
  data: operations["user_list"]["parameters"],
  headers: any
): Promise<AxiosResponse<operations["user_list"]["responses"][200]>> => {
  let endpoint = "/user/";
  return await axios({
    method: "get",
    url: endpoint,
    data,
    headers,
  });
};

export const user_create = async (
  data: definitions["User"],
  headers: any
): Promise<AxiosResponse<operations["user_create"]["responses"][201]>> => {
  let endpoint = "/user/";
  return await axios({
    method: "post",
    url: endpoint,
    data,
    headers,
  });
};

export const user_read = async (
  id: string,
  headers: any
): Promise<AxiosResponse<operations["user_read"]["responses"][200]>> => {
  let endpoint = "/user/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await axios({
    method: "get",
    url: endpoint,

    headers,
  });
};

export const user_update = async (
  id: string,
  data: definitions["User"],
  headers: any
): Promise<AxiosResponse<operations["user_update"]["responses"][200]>> => {
  let endpoint = "/user/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await axios({
    method: "put",
    url: endpoint,
    data,
    headers,
  });
};

export const user_partial_update = async (
  id: string,
  data: definitions["User"],
  headers: any
): Promise<
  AxiosResponse<operations["user_partial_update"]["responses"][200]>
> => {
  let endpoint = "/user/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await axios({
    method: "patch",
    url: endpoint,
    data,
    headers,
  });
};

export const user_delete = async (
  id: string,
  headers: any
): Promise<AxiosResponse<any>> => {
  let endpoint = "/user/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await axios({
    method: "delete",
    url: endpoint,

    headers,
  });
};
