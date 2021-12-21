import { operations, definitions } from "../Schemas";
import axios, { AxiosResponse } from "axios";

export const expertiseprofile_list = async (
  data: operations["expertiseprofile_list"]["parameters"],
  headers: any
): Promise<
  AxiosResponse<operations["expertiseprofile_list"]["responses"][200]["schema"]>
> => {
  let endpoint = "/api/expertiseprofile/";
  return await axios({
    method: "get",
    url: endpoint,
    data,
    headers,
  });
};
export const expertiseprofile_create = async (
  data: definitions["ExpertiseProfile"] | definitions["ExpertiseProfile"][],
  headers: any
): Promise<
  AxiosResponse<
    operations["expertiseprofile_create"]["responses"][201]["schema"]
  >
> => {
  let endpoint = "/api/expertiseprofile/";
  return await axios({
    method: "post",
    url: endpoint,
    data,
    headers,
  });
};
export const expertiseprofile_read = async (
  id: string,
  headers: any
): Promise<
  AxiosResponse<operations["expertiseprofile_read"]["responses"][200]["schema"]>
> => {
  let endpoint = "/api/expertiseprofile/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await axios({
    method: "get",
    url: endpoint,

    headers,
  });
};
export const expertiseprofile_update = async (
  id: string,
  data: definitions["ExpertiseProfile"] | definitions["ExpertiseProfile"][],
  headers: any
): Promise<
  AxiosResponse<
    operations["expertiseprofile_update"]["responses"][200]["schema"]
  >
> => {
  let endpoint = "/api/expertiseprofile/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await axios({
    method: "put",
    url: endpoint,
    data,
    headers,
  });
};
export const expertiseprofile_partial_update = async (
  id: string,
  data: definitions["ExpertiseProfile"] | definitions["ExpertiseProfile"][],
  headers: any
): Promise<
  AxiosResponse<
    operations["expertiseprofile_partial_update"]["responses"][200]["schema"]
  >
> => {
  let endpoint = "/api/expertiseprofile/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await axios({
    method: "patch",
    url: endpoint,
    data,
    headers,
  });
};
export const expertiseprofile_delete = async (
  id: string,
  headers: any
): Promise<AxiosResponse<any["schema"]>> => {
  let endpoint = "/api/expertiseprofile/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await axios({
    method: "delete",
    url: endpoint,

    headers,
  });
};
