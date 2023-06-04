import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
import { dataLayerObj } from "../instance";
import type { RequestType } from "../instance";

export const app_listFields = [
  { name: "id", in: "query", description: "", required: false, type: "number" },
  {
    name: "title",
    in: "query",
    description: "",
    required: false,
    type: "string",
  },
  {
    name: "pathUrl",
    in: "query",
    description: "",
    required: false,
    type: "string",
  },
  {
    name: "page",
    in: "query",
    description: "A page number within the paginated result set.",
    required: false,
    type: "integer",
  },
  {
    name: "page_size",
    in: "query",
    description: "Number of results to return per page.",
    required: false,
    type: "integer",
  },
];

export const app_list = async (
  data: operations["app_list"]["parameters"],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["app_list"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/app/";
  const request: RequestType = {
    endpoint,
    name: "app",
    verb: "get",
  };
  return await dataLayerObj.requestApi(request, headers, force, data.query);
};
export const app_createFields = {
  required: ["title", "pathUrl"],
  type: "object",
  properties: {
    id: { title: "ID", type: "integer", readOnly: true },
    title: { title: "Title", type: "string", maxLength: 30, minLength: 1 },
    pathUrl: { title: "PathUrl", type: "string", maxLength: 30, minLength: 1 },
  },
};

export const app_create = async (
  data: definitions["App"] | definitions["App"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["app_create"]["responses"][201]["schema"]>
> => {
  let endpoint = _apiPrefix + "/app/";
  const request: RequestType = {
    endpoint,
    name: "app",
    verb: "post",
  };
  return await dataLayerObj.requestApi(request, headers, force, data);
};
export const app_read = async (
  id: string,
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["app_read"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/app/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "app",
    verb: "get",
  };
  return await dataLayerObj.requestApi(request, headers, force);
};
export const app_updateFields = {
  required: ["title", "pathUrl"],
  type: "object",
  properties: {
    id: { title: "ID", type: "integer", readOnly: true },
    title: { title: "Title", type: "string", maxLength: 30, minLength: 1 },
    pathUrl: { title: "PathUrl", type: "string", maxLength: 30, minLength: 1 },
  },
};

export const app_update = async (
  id: string,
  data: definitions["App"] | definitions["App"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["app_update"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/app/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "app",
    verb: "put",
  };
  return dataLayerObj.requestApi(request, headers, force, data);
};
export const app_partial_updateFields = {
  required: ["title", "pathUrl"],
  type: "object",
  properties: {
    id: { title: "ID", type: "integer", readOnly: true },
    title: { title: "Title", type: "string", maxLength: 30, minLength: 1 },
    pathUrl: { title: "PathUrl", type: "string", maxLength: 30, minLength: 1 },
  },
};

export const app_partial_update = async (
  id: string,
  data: definitions["App"] | definitions["App"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["app_partial_update"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/app/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "app",
    verb: "patch",
  };
  return dataLayerObj.requestApi(request, headers, force, data);
};
export const app_delete = async (
  id: string,
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<AxiosResponse<any["schema"]>> => {
  let endpoint = _apiPrefix + "/app/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "app",
    verb: "delete",
  };
  return dataLayerObj.requestApi(request, headers, force);
};
