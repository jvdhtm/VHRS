import { operations, definitions } from "../schemas";
import axios, { AxiosResponse } from "axios";

export const expertise_list = async (
  data: operations["expertise_list"]["parameters"],
  headers: any
): Promise<
  AxiosResponse<operations["expertise_list"]["responses"][200]["schema"]>
> => {
  let endpoint = "/api/expertise/";
  return await axios({
    method: "get",
    url: endpoint,
    data,
    headers,
  });
};
export const expertise_create = async (
  data: definitions["Expertise"] | definitions["Expertise"][],
  headers: any
): Promise<
  AxiosResponse<operations["expertise_create"]["responses"][201]["schema"]>
> => {
  let endpoint = "/api/expertise/";
  return await axios({
    method: "post",
    url: endpoint,
    data,
    headers,
  });
};
export const expertise_read = async (
  id: string,
  headers: any
): Promise<
  AxiosResponse<operations["expertise_read"]["responses"][200]["schema"]>
> => {
  let endpoint = "/api/expertise/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await axios({
    method: "get",
    url: endpoint,

    headers,
  });
};
export const expertise_update = async (
  id: string,
  data: definitions["Expertise"] | definitions["Expertise"][],
  headers: any
): Promise<
  AxiosResponse<operations["expertise_update"]["responses"][200]["schema"]>
> => {
  let endpoint = "/api/expertise/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await axios({
    method: "put",
    url: endpoint,
    data,
    headers,
  });
};
export const expertise_partial_update = async (
  id: string,
  data: definitions["Expertise"] | definitions["Expertise"][],
  headers: any
): Promise<
  AxiosResponse<
    operations["expertise_partial_update"]["responses"][200]["schema"]
  >
> => {
  let endpoint = "/api/expertise/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await axios({
    method: "patch",
    url: endpoint,
    data,
    headers,
  });
};
export const expertise_delete = async (
  id: string,
  headers: any
): Promise<AxiosResponse<any["schema"]>> => {
  let endpoint = "/api/expertise/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await axios({
    method: "delete",
    url: endpoint,

    headers,
  });
};
