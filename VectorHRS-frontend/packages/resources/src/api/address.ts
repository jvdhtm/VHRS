import { operations, definitions } from "../Schemas";
import axios, { AxiosResponse } from "axios";

export const address_list = async (
  data: operations["address_list"]["parameters"],
  headers: any
): Promise<AxiosResponse<operations["address_list"]["responses"][200]>> => {
  let endpoint = "/address/";
  return await axios({
    method: "get",
    url: endpoint,
    data,
    headers,
  });
};
export const address_create = async (
  data: definitions["Address"] | definitions["Address"][],
  headers: any
): Promise<AxiosResponse<operations["address_create"]["responses"][201]>> => {
  let endpoint = "/address/";
  return await axios({
    method: "post",
    url: endpoint,
    data,
    headers,
  });
};
export const address_read = async (
  id: string,
  headers: any
): Promise<AxiosResponse<operations["address_read"]["responses"][200]>> => {
  let endpoint = "/address/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await axios({
    method: "get",
    url: endpoint,

    headers,
  });
};
export const address_update = async (
  id: string,
  data: definitions["Address"] | definitions["Address"][],
  headers: any
): Promise<AxiosResponse<operations["address_update"]["responses"][200]>> => {
  let endpoint = "/address/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await axios({
    method: "put",
    url: endpoint,
    data,
    headers,
  });
};
export const address_partial_update = async (
  id: string,
  data: definitions["Address"] | definitions["Address"][],
  headers: any
): Promise<
  AxiosResponse<operations["address_partial_update"]["responses"][200]>
> => {
  let endpoint = "/address/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await axios({
    method: "patch",
    url: endpoint,
    data,
    headers,
  });
};
export const address_delete = async (
  id: string,
  headers: any
): Promise<AxiosResponse<any>> => {
  let endpoint = "/address/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await axios({
    method: "delete",
    url: endpoint,

    headers,
  });
};
