import { operations, definitions } from "../Schemas";
import axios, { AxiosResponse } from "axios";

export const stafffunctions_list = async (
  data: operations["stafffunctions_list"]["parameters"],
  headers: any
): Promise<
  AxiosResponse<operations["stafffunctions_list"]["responses"][200]["schema"]>
> => {
  let endpoint = "/api/stafffunctions/";
  return await axios({
    method: "get",
    url: endpoint,
    data,
    headers,
  });
};
export const stafffunctions_create = async (
  data: definitions["StaffFunctions"] | definitions["StaffFunctions"][],
  headers: any
): Promise<
  AxiosResponse<operations["stafffunctions_create"]["responses"][201]["schema"]>
> => {
  let endpoint = "/api/stafffunctions/";
  return await axios({
    method: "post",
    url: endpoint,
    data,
    headers,
  });
};
export const stafffunctions_read = async (
  id: string,
  headers: any
): Promise<
  AxiosResponse<operations["stafffunctions_read"]["responses"][200]["schema"]>
> => {
  let endpoint = "/api/stafffunctions/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await axios({
    method: "get",
    url: endpoint,

    headers,
  });
};
export const stafffunctions_update = async (
  id: string,
  data: definitions["StaffFunctions"] | definitions["StaffFunctions"][],
  headers: any
): Promise<
  AxiosResponse<operations["stafffunctions_update"]["responses"][200]["schema"]>
> => {
  let endpoint = "/api/stafffunctions/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await axios({
    method: "put",
    url: endpoint,
    data,
    headers,
  });
};
export const stafffunctions_partial_update = async (
  id: string,
  data: definitions["StaffFunctions"] | definitions["StaffFunctions"][],
  headers: any
): Promise<
  AxiosResponse<
    operations["stafffunctions_partial_update"]["responses"][200]["schema"]
  >
> => {
  let endpoint = "/api/stafffunctions/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await axios({
    method: "patch",
    url: endpoint,
    data,
    headers,
  });
};
export const stafffunctions_delete = async (
  id: string,
  headers: any
): Promise<AxiosResponse<any["schema"]>> => {
  let endpoint = "/api/stafffunctions/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await axios({
    method: "delete",
    url: endpoint,

    headers,
  });
};