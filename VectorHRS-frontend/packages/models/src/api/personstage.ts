import { operations, definitions } from "../schemas";
import axios, { AxiosResponse } from "axios";

export const personstage_list = async (
  data: operations["personstage_list"]["parameters"],
  headers: any
): Promise<
  AxiosResponse<operations["personstage_list"]["responses"][200]["schema"]>
> => {
  let endpoint = "/api/personstage/";
  return await axios({
    method: "get",
    url: endpoint,
    data,
    headers,
  });
};
export const personstage_create = async (
  data: definitions["PersonStage"] | definitions["PersonStage"][],
  headers: any
): Promise<
  AxiosResponse<operations["personstage_create"]["responses"][201]["schema"]>
> => {
  let endpoint = "/api/personstage/";
  return await axios({
    method: "post",
    url: endpoint,
    data,
    headers,
  });
};
export const personstage_read = async (
  id: string,
  headers: any
): Promise<
  AxiosResponse<operations["personstage_read"]["responses"][200]["schema"]>
> => {
  let endpoint = "/api/personstage/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await axios({
    method: "get",
    url: endpoint,

    headers,
  });
};
export const personstage_update = async (
  id: string,
  data: definitions["PersonStage"] | definitions["PersonStage"][],
  headers: any
): Promise<
  AxiosResponse<operations["personstage_update"]["responses"][200]["schema"]>
> => {
  let endpoint = "/api/personstage/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await axios({
    method: "put",
    url: endpoint,
    data,
    headers,
  });
};
export const personstage_partial_update = async (
  id: string,
  data: definitions["PersonStage"] | definitions["PersonStage"][],
  headers: any
): Promise<
  AxiosResponse<
    operations["personstage_partial_update"]["responses"][200]["schema"]
  >
> => {
  let endpoint = "/api/personstage/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await axios({
    method: "patch",
    url: endpoint,
    data,
    headers,
  });
};
export const personstage_delete = async (
  id: string,
  headers: any
): Promise<AxiosResponse<any["schema"]>> => {
  let endpoint = "/api/personstage/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await axios({
    method: "delete",
    url: endpoint,

    headers,
  });
};
