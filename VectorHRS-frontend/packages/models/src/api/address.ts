import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
import { instance } from "../instance";

export const address_list = async (
  data: operations["address_list"]["parameters"],
  headers: any
): Promise<
  AxiosResponse<operations["address_list"]["responses"][200]["schema"]>
> => {
  let endpoint = "/api/address/";
  return await instance({
    method: "get",
    url: endpoint,
    params: data.query,
    headers,
  });
};
export const address_create = async (
  data: definitions["Address"] | definitions["Address"][],
  headers: any
): Promise<
  AxiosResponse<operations["address_create"]["responses"][201]["schema"]>
> => {
  let endpoint = "/api/address/";
  return await instance({
    method: "post",
    url: endpoint,
    data,
    headers,
  });
};
export const address_read = async (
  id: string,
  headers: any
): Promise<
  AxiosResponse<operations["address_read"]["responses"][200]["schema"]>
> => {
  let endpoint = "/api/address/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await instance({
    method: "get",
    url: endpoint,

    headers,
  });
};
export const address_update = async (
  id: string,
  data: definitions["Address"] | definitions["Address"][],
  headers: any
): Promise<
  AxiosResponse<operations["address_update"]["responses"][200]["schema"]>
> => {
  let endpoint = "/api/address/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await instance({
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
  AxiosResponse<
    operations["address_partial_update"]["responses"][200]["schema"]
  >
> => {
  let endpoint = "/api/address/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await instance({
    method: "patch",
    url: endpoint,
    data,
    headers,
  });
};
export const address_delete = async (
  id: string,
  headers: any
): Promise<AxiosResponse<any["schema"]>> => {
  let endpoint = "/api/address/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await instance({
    method: "delete",
    url: endpoint,

    headers,
  });
};
