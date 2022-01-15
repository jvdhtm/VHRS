import { operations, definitions } from "../schemas";
import axios, { AxiosResponse } from "axios";

export const staffstage_list = async (
  data: operations["staffstage_list"]["parameters"],
  headers: any
): Promise<
  AxiosResponse<operations["staffstage_list"]["responses"][200]["schema"]>
> => {
  let endpoint = "/api/staffstage/";
  return await axios({
    method: "get",
    url: endpoint,
    data,
    headers,
  });
};
export const staffstage_create = async (
  data: definitions["StaffStage"] | definitions["StaffStage"][],
  headers: any
): Promise<
  AxiosResponse<operations["staffstage_create"]["responses"][201]["schema"]>
> => {
  let endpoint = "/api/staffstage/";
  return await axios({
    method: "post",
    url: endpoint,
    data,
    headers,
  });
};
export const staffstage_read = async (
  id: string,
  headers: any
): Promise<
  AxiosResponse<operations["staffstage_read"]["responses"][200]["schema"]>
> => {
  let endpoint = "/api/staffstage/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await axios({
    method: "get",
    url: endpoint,

    headers,
  });
};
export const staffstage_update = async (
  id: string,
  data: definitions["StaffStage"] | definitions["StaffStage"][],
  headers: any
): Promise<
  AxiosResponse<operations["staffstage_update"]["responses"][200]["schema"]>
> => {
  let endpoint = "/api/staffstage/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await axios({
    method: "put",
    url: endpoint,
    data,
    headers,
  });
};
export const staffstage_partial_update = async (
  id: string,
  data: definitions["StaffStage"] | definitions["StaffStage"][],
  headers: any
): Promise<
  AxiosResponse<
    operations["staffstage_partial_update"]["responses"][200]["schema"]
  >
> => {
  let endpoint = "/api/staffstage/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await axios({
    method: "patch",
    url: endpoint,
    data,
    headers,
  });
};
export const staffstage_delete = async (
  id: string,
  headers: any
): Promise<AxiosResponse<any["schema"]>> => {
  let endpoint = "/api/staffstage/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await axios({
    method: "delete",
    url: endpoint,

    headers,
  });
};
