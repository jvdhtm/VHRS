import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
import { dataLayerObj } from "../instance";
import type { RequestType } from "../instance";

export const role_listFields = [
  { name: "id", in: "query", description: "", required: false, type: "number" },
  {
    name: "title",
    in: "query",
    description: "",
    required: false,
    type: "string",
  },
  {
    name: "user",
    in: "query",
    description: "",
    required: false,
    type: "string",
  },
  {
    name: "permission",
    in: "query",
    description: "",
    required: false,
    type: "string",
  },
  {
    name: "app",
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

export const role_list = async (
  data: operations["role_list"]["parameters"],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["role_list"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/role/";
  const request: RequestType = {
    endpoint,
    name: "role",
    verb: "get",
  };
  return await dataLayerObj.requestApi(request, headers, force, data.query);
};
export const role_createFields = {
  required: ["title", "user", "app"],
  type: "object",
  properties: {
    id: { title: "ID", type: "integer", readOnly: true },
    title: { title: "Title", type: "string", maxLength: 30, minLength: 1 },
    user: { title: "User", type: "integer" },
    permission: {
      title: "Permission",
      type: "string",
      enum: ["R", "W", "RW", "RWD"],
    },
    app: { title: "App", type: "integer" },
  },
};

export const role_create = async (
  data: definitions["Role"] | definitions["Role"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["role_create"]["responses"][201]["schema"]>
> => {
  let endpoint = _apiPrefix + "/role/";
  const request: RequestType = {
    endpoint,
    name: "role",
    verb: "post",
  };
  return await dataLayerObj.requestApi(request, headers, force, data);
};
export const role_read = async (
  id: string,
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["role_read"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/role/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "role",
    verb: "get",
  };
  return await dataLayerObj.requestApi(request, headers, force);
};
export const role_updateFields = {
  required: ["title", "user", "app"],
  type: "object",
  properties: {
    id: { title: "ID", type: "integer", readOnly: true },
    title: { title: "Title", type: "string", maxLength: 30, minLength: 1 },
    user: { title: "User", type: "integer" },
    permission: {
      title: "Permission",
      type: "string",
      enum: ["R", "W", "RW", "RWD"],
    },
    app: { title: "App", type: "integer" },
  },
};

export const role_update = async (
  id: string,
  data: definitions["Role"] | definitions["Role"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["role_update"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/role/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "role",
    verb: "put",
  };
  return dataLayerObj.requestApi(request, headers, force, data);
};
export const role_partial_updateFields = {
  required: ["title", "user", "app"],
  type: "object",
  properties: {
    id: { title: "ID", type: "integer", readOnly: true },
    title: { title: "Title", type: "string", maxLength: 30, minLength: 1 },
    user: { title: "User", type: "integer" },
    permission: {
      title: "Permission",
      type: "string",
      enum: ["R", "W", "RW", "RWD"],
    },
    app: { title: "App", type: "integer" },
  },
};

export const role_partial_update = async (
  id: string,
  data: definitions["Role"] | definitions["Role"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["role_partial_update"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/role/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "role",
    verb: "patch",
  };
  return dataLayerObj.requestApi(request, headers, force, data);
};
export const role_delete = async (
  id: string,
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<AxiosResponse<any["schema"]>> => {
  let endpoint = _apiPrefix + "/role/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "role",
    verb: "delete",
  };
  return dataLayerObj.requestApi(request, headers, force);
};
