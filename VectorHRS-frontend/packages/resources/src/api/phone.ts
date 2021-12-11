import { operations, definitions } from "../Schemas";
import axios, { AxiosResponse } from "axios";

export const phone_list = async (
  data: operations["phone_list"]["parameters"],
  headers: any
): Promise<AxiosResponse<operations["phone_list"]["responses"][200]>> => {
  let endpoint = "/phone/";
  return await axios({
    method: "get",
    url: endpoint,
    data,
    headers,
  });
};

export const phone_create = async (
  data: definitions["Phone"],
  headers: any
): Promise<AxiosResponse<operations["phone_create"]["responses"][201]>> => {
  let endpoint = "/phone/";
  return await axios({
    method: "post",
    url: endpoint,
    data,
    headers,
  });
};

export const phone_read = async (
  id: string,
  headers: any
): Promise<AxiosResponse<operations["phone_read"]["responses"][200]>> => {
  let endpoint = "/phone/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await axios({
    method: "get",
    url: endpoint,

    headers,
  });
};

export const phone_update = async (
  id: string,
  data: definitions["Phone"],
  headers: any
): Promise<AxiosResponse<operations["phone_update"]["responses"][200]>> => {
  let endpoint = "/phone/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await axios({
    method: "put",
    url: endpoint,
    data,
    headers,
  });
};

export const phone_partial_update = async (
  id: string,
  data: definitions["Phone"],
  headers: any
): Promise<
  AxiosResponse<operations["phone_partial_update"]["responses"][200]>
> => {
  let endpoint = "/phone/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await axios({
    method: "patch",
    url: endpoint,
    data,
    headers,
  });
};

export const phone_delete = async (
  id: string,
  headers: any
): Promise<AxiosResponse<any>> => {
  let endpoint = "/phone/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await axios({
    method: "delete",
    url: endpoint,

    headers,
  });
};
