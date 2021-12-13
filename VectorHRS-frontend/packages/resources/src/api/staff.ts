import { operations, definitions } from "../Schemas";
import axios, { AxiosResponse } from "axios";

export const staff_list = async (
  data: operations["staff_list"]["parameters"],
  headers: any
): Promise<
  AxiosResponse<operations["staff_list"]["responses"][200]["schema"]>
> => {
  let endpoint = "/staff/";
  return await axios({
    method: "get",
    url: endpoint,
    data,
    headers,
  });
};
export const staff_create = async (
  data: definitions["Staff"] | definitions["Staff"][],
  headers: any
): Promise<
  AxiosResponse<operations["staff_create"]["responses"][201]["schema"]>
> => {
  let endpoint = "/staff/";
  return await axios({
    method: "post",
    url: endpoint,
    data,
    headers,
  });
};
export const staff_read = async (
  id: string,
  headers: any
): Promise<
  AxiosResponse<operations["staff_read"]["responses"][200]["schema"]>
> => {
  let endpoint = "/staff/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await axios({
    method: "get",
    url: endpoint,

    headers,
  });
};
export const staff_update = async (
  id: string,
  data: definitions["Staff"] | definitions["Staff"][],
  headers: any
): Promise<
  AxiosResponse<operations["staff_update"]["responses"][200]["schema"]>
> => {
  let endpoint = "/staff/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await axios({
    method: "put",
    url: endpoint,
    data,
    headers,
  });
};
export const staff_partial_update = async (
  id: string,
  data: definitions["Staff"] | definitions["Staff"][],
  headers: any
): Promise<
  AxiosResponse<operations["staff_partial_update"]["responses"][200]["schema"]>
> => {
  let endpoint = "/staff/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await axios({
    method: "patch",
    url: endpoint,
    data,
    headers,
  });
};
export const staff_delete = async (
  id: string,
  headers: any
): Promise<AxiosResponse<any["schema"]>> => {
  let endpoint = "/staff/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await axios({
    method: "delete",
    url: endpoint,

    headers,
  });
};
