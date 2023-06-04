import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
import { dataLayerObj } from "../instance";
import type { RequestType } from "../instance";

export const function_listFields = [
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

export const function_list = async (
  data: operations["function_list"]["parameters"],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["function_list"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/function/";
  const request: RequestType = {
    endpoint,
    name: "function",
    verb: "get",
  };
  return await dataLayerObj.requestApi(request, headers, force, data.query);
};
export const function_createFields = {
  required: ["shape", "status"],
  type: "object",
  properties: {
    id: { title: "ID", type: "integer", readOnly: true },
    name: { title: "Name", type: "string", maxLength: 100, "x-nullable": true },
    description: {
      title: "Description",
      type: "string",
      maxLength: 100,
      "x-nullable": true,
    },
    shape: {
      title: "Shape",
      type: "string",
      enum: ["circle", "square", "rectangle", "triangle"],
    },
    status: {
      title: "Status",
      type: "string",
      enum: ["activated", "deactivated", "pending", "confirmed", "archived"],
    },
    created_date_time: {
      title: "Created date time",
      type: "string",
      format: "date-time",
    },
  },
};

export const function_create = async (
  data: definitions["Function"] | definitions["Function"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["function_create"]["responses"][201]["schema"]>
> => {
  let endpoint = _apiPrefix + "/function/";
  const request: RequestType = {
    endpoint,
    name: "function",
    verb: "post",
  };
  return await dataLayerObj.requestApi(request, headers, force, data);
};
export const function_read = async (
  id: string,
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["function_read"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/function/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "function",
    verb: "get",
  };
  return await dataLayerObj.requestApi(request, headers, force);
};
export const function_updateFields = {
  required: ["shape", "status"],
  type: "object",
  properties: {
    id: { title: "ID", type: "integer", readOnly: true },
    name: { title: "Name", type: "string", maxLength: 100, "x-nullable": true },
    description: {
      title: "Description",
      type: "string",
      maxLength: 100,
      "x-nullable": true,
    },
    shape: {
      title: "Shape",
      type: "string",
      enum: ["circle", "square", "rectangle", "triangle"],
    },
    status: {
      title: "Status",
      type: "string",
      enum: ["activated", "deactivated", "pending", "confirmed", "archived"],
    },
    created_date_time: {
      title: "Created date time",
      type: "string",
      format: "date-time",
    },
  },
};

export const function_update = async (
  id: string,
  data: definitions["Function"] | definitions["Function"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["function_update"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/function/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "function",
    verb: "put",
  };
  return dataLayerObj.requestApi(request, headers, force, data);
};
export const function_partial_updateFields = {
  required: ["shape", "status"],
  type: "object",
  properties: {
    id: { title: "ID", type: "integer", readOnly: true },
    name: { title: "Name", type: "string", maxLength: 100, "x-nullable": true },
    description: {
      title: "Description",
      type: "string",
      maxLength: 100,
      "x-nullable": true,
    },
    shape: {
      title: "Shape",
      type: "string",
      enum: ["circle", "square", "rectangle", "triangle"],
    },
    status: {
      title: "Status",
      type: "string",
      enum: ["activated", "deactivated", "pending", "confirmed", "archived"],
    },
    created_date_time: {
      title: "Created date time",
      type: "string",
      format: "date-time",
    },
  },
};

export const function_partial_update = async (
  id: string,
  data: definitions["Function"] | definitions["Function"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<
    operations["function_partial_update"]["responses"][200]["schema"]
  >
> => {
  let endpoint = _apiPrefix + "/function/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "function",
    verb: "patch",
  };
  return dataLayerObj.requestApi(request, headers, force, data);
};
export const function_delete = async (
  id: string,
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<AxiosResponse<any["schema"]>> => {
  let endpoint = _apiPrefix + "/function/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "function",
    verb: "delete",
  };
  return dataLayerObj.requestApi(request, headers, force);
};
