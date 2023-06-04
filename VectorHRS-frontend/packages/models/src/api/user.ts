import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
import { dataLayerObj } from "../instance";
import type { RequestType } from "../instance";

export const user_listFields = [
  { name: "id", in: "query", description: "", required: false, type: "number" },
  {
    name: "email",
    in: "query",
    description: "",
    required: false,
    type: "string",
  },
  {
    name: "passcode",
    in: "query",
    description: "",
    required: false,
    type: "string",
  },
  {
    name: "first_name",
    in: "query",
    description: "",
    required: false,
    type: "string",
  },
  {
    name: "last_name",
    in: "query",
    description: "",
    required: false,
    type: "string",
  },
  {
    name: "is_active",
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

export const user_list = async (
  data: operations["user_list"]["parameters"],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["user_list"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/user/";
  const request: RequestType = {
    endpoint,
    name: "user",
    verb: "get",
  };
  return await dataLayerObj.requestApi(request, headers, force, data.query);
};
export const user_createFields = {
  required: ["email", "passcode", "first_name", "last_name"],
  type: "object",
  properties: {
    id: { title: "ID", type: "integer", readOnly: true },
    email: {
      title: "Email address",
      type: "string",
      format: "email",
      maxLength: 255,
      minLength: 1,
    },
    passcode: {
      title: "Passcode",
      type: "string",
      maxLength: 1024,
      minLength: 1,
    },
    first_name: {
      title: "First name",
      type: "string",
      maxLength: 30,
      minLength: 1,
    },
    last_name: {
      title: "Last name",
      type: "string",
      maxLength: 30,
      minLength: 1,
    },
    is_active: { title: "Is active", type: "boolean" },
  },
};

export const user_create = async (
  data: definitions["User"] | definitions["User"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["user_create"]["responses"][201]["schema"]>
> => {
  let endpoint = _apiPrefix + "/user/";
  const request: RequestType = {
    endpoint,
    name: "user",
    verb: "post",
  };
  return await dataLayerObj.requestApi(request, headers, force, data);
};
export const user_read = async (
  id: string,
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["user_read"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/user/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "user",
    verb: "get",
  };
  return await dataLayerObj.requestApi(request, headers, force);
};
export const user_updateFields = {
  required: ["email", "passcode", "first_name", "last_name"],
  type: "object",
  properties: {
    id: { title: "ID", type: "integer", readOnly: true },
    email: {
      title: "Email address",
      type: "string",
      format: "email",
      maxLength: 255,
      minLength: 1,
    },
    passcode: {
      title: "Passcode",
      type: "string",
      maxLength: 1024,
      minLength: 1,
    },
    first_name: {
      title: "First name",
      type: "string",
      maxLength: 30,
      minLength: 1,
    },
    last_name: {
      title: "Last name",
      type: "string",
      maxLength: 30,
      minLength: 1,
    },
    is_active: { title: "Is active", type: "boolean" },
  },
};

export const user_update = async (
  id: string,
  data: definitions["User"] | definitions["User"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["user_update"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/user/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "user",
    verb: "put",
  };
  return dataLayerObj.requestApi(request, headers, force, data);
};
export const user_partial_updateFields = {
  required: ["email", "passcode", "first_name", "last_name"],
  type: "object",
  properties: {
    id: { title: "ID", type: "integer", readOnly: true },
    email: {
      title: "Email address",
      type: "string",
      format: "email",
      maxLength: 255,
      minLength: 1,
    },
    passcode: {
      title: "Passcode",
      type: "string",
      maxLength: 1024,
      minLength: 1,
    },
    first_name: {
      title: "First name",
      type: "string",
      maxLength: 30,
      minLength: 1,
    },
    last_name: {
      title: "Last name",
      type: "string",
      maxLength: 30,
      minLength: 1,
    },
    is_active: { title: "Is active", type: "boolean" },
  },
};

export const user_partial_update = async (
  id: string,
  data: definitions["User"] | definitions["User"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["user_partial_update"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/user/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "user",
    verb: "patch",
  };
  return dataLayerObj.requestApi(request, headers, force, data);
};
export const user_delete = async (
  id: string,
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<AxiosResponse<any["schema"]>> => {
  let endpoint = _apiPrefix + "/user/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "user",
    verb: "delete",
  };
  return dataLayerObj.requestApi(request, headers, force);
};
