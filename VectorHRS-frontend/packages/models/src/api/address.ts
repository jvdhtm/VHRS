import { operations, definitions } from "../Schemas";
import axios, { AxiosResponse } from "axios";

export const address_list = async (
  data: operations["address_list"]["parameters"],
  headers: any
): Promise<AxiosResponse<operations["address_list"]["responses"]>> => {
  let endpoint = "/address/";
  return await axios({
    method: "get",
    url: endpoint,
    data,
    headers,
  });
};

export const address_create = async (
  data: definitions["Address"],
  headers: any
): Promise<AxiosResponse<operations["address_create"]["responses"]>> => {
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
): Promise<AxiosResponse<operations["address_read"]["responses"]>> => {
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
  data: definitions["Address"],
  headers: any
): Promise<AxiosResponse<operations["address_update"]["responses"]>> => {
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
  data: definitions["Address"],
  headers: any
): Promise<
  AxiosResponse<operations["address_partial_update"]["responses"]>
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
): Promise<AxiosResponse<operations["address_delete"]["responses"]>> => {
  let endpoint = "/address/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  return await axios({
    method: "delete",
    url: endpoint,

    headers,
  });
};
