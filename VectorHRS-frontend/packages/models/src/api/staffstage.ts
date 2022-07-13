import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
import { instance } from "../instance";

export const staffstage_list = async (
  data: operations["staffstage_list"]["parameters"],
  headers: any,
  _apiPrefix = "/api"
): Promise<
  AxiosResponse<operations["staffstage_list"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/staffstage/";
  return await instance({
    method: "get",
    url: endpoint,
    params: data.query,
    headers,
  });
};
export const staffstage_create = async (
  data: definitions["StaffStage"] | definitions["StaffStage"][],
  headers: any,
  _apiPrefix = "/api"
): Promise<
  AxiosResponse<operations["staffstage_create"]["responses"][201]["schema"]>
> => {
  let endpoint = _apiPrefix + "/staffstage/";
  return await instance({
    method: "post",
    url: endpoint,
    data,
    headers,
  });
};
export const staffstage_read = async (
  id: string,
  headers: any,
  _apiPrefix = "/api"
): Promise<
  AxiosResponse<operations["staffstage_read"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/staffstage/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await instance({
    method: "get",
    url: endpoint,

    headers,
  });
};
export const staffstage_update = async (
  id: string,
  data: definitions["StaffStage"] | definitions["StaffStage"][],
  headers: any,
  _apiPrefix = "/api"
): Promise<
  AxiosResponse<operations["staffstage_update"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/staffstage/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await instance({
    method: "put",
    url: endpoint,
    data,
    headers,
  });
};
export const staffstage_partial_update = async (
  id: string,
  data: definitions["StaffStage"] | definitions["StaffStage"][],
  headers: any,
  _apiPrefix = "/api"
): Promise<
  AxiosResponse<
    operations["staffstage_partial_update"]["responses"][200]["schema"]
  >
> => {
  let endpoint = _apiPrefix + "/staffstage/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await instance({
    method: "patch",
    url: endpoint,
    data,
    headers,
  });
};
export const staffstage_delete = async (
  id: string,
  headers: any,
  _apiPrefix = "/api"
): Promise<AxiosResponse<any["schema"]>> => {
  let endpoint = _apiPrefix + "/staffstage/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await instance({
    method: "delete",
    url: endpoint,

    headers,
  });
};
