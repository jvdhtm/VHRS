import { operations, definitions } from "../Schemas";
import axios, { AxiosResponse } from "axios";

export const department_list = async (
  data: operations["department_list"]["parameters"],
  headers: any
): Promise<
  AxiosResponse<operations["department_list"]["responses"][200]["schema"]>
> => {
  let endpoint = "/api/department/";
  return await axios({
    method: "get",
    url: endpoint,
    data,
    headers,
  });
};
export const department_create = async (
  data: definitions["Department"] | definitions["Department"][],
  headers: any
): Promise<
  AxiosResponse<operations["department_create"]["responses"][201]["schema"]>
> => {
  let endpoint = "/api/department/";
  return await axios({
    method: "post",
    url: endpoint,
    data,
    headers,
  });
};
export const department_read = async (
  id: string,
  headers: any
): Promise<
  AxiosResponse<operations["department_read"]["responses"][200]["schema"]>
> => {
  let endpoint = "/api/department/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await axios({
    method: "get",
    url: endpoint,

    headers,
  });
};
export const department_update = async (
  id: string,
  data: definitions["Department"] | definitions["Department"][],
  headers: any
): Promise<
  AxiosResponse<operations["department_update"]["responses"][200]["schema"]>
> => {
  let endpoint = "/api/department/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await axios({
    method: "put",
    url: endpoint,
    data,
    headers,
  });
};
export const department_partial_update = async (
  id: string,
  data: definitions["Department"] | definitions["Department"][],
  headers: any
): Promise<
  AxiosResponse<
    operations["department_partial_update"]["responses"][200]["schema"]
  >
> => {
  let endpoint = "/api/department/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await axios({
    method: "patch",
    url: endpoint,
    data,
    headers,
  });
};
export const department_delete = async (
  id: string,
  headers: any
): Promise<AxiosResponse<any["schema"]>> => {
  let endpoint = "/api/department/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await axios({
    method: "delete",
    url: endpoint,

    headers,
  });
};
