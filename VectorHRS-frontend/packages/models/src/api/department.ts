import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
import { dataLayerObj } from "../instance";
import type { RequestType } from "../instance";

export const department_listFields = [
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

export const department_list = async (
  data: operations["department_list"]["parameters"],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["department_list"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/department/";
  const request: RequestType = {
    endpoint,
    name: "department",
    verb: "get",
  };
  return await dataLayerObj.requestApi(request, headers, force, data.query);
};
export const department_createFields = {
  required: ["shape", "status"],
  type: "object",
  properties: {
    id: { title: "ID", type: "integer", readOnly: true },
    name: { title: "Name", type: "string", maxLength: 100, "x-nullable": true },
    parentId: { title: "ParentId", type: "integer", "x-nullable": true },
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

export const department_create = async (
  data: definitions["Department"] | definitions["Department"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["department_create"]["responses"][201]["schema"]>
> => {
  let endpoint = _apiPrefix + "/department/";
  const request: RequestType = {
    endpoint,
    name: "department",
    verb: "post",
  };
  return await dataLayerObj.requestApi(request, headers, force, data);
};
export const department_read = async (
  id: string,
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["department_read"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/department/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "department",
    verb: "get",
  };
  return await dataLayerObj.requestApi(request, headers, force);
};
export const department_updateFields = {
  required: ["shape", "status"],
  type: "object",
  properties: {
    id: { title: "ID", type: "integer", readOnly: true },
    name: { title: "Name", type: "string", maxLength: 100, "x-nullable": true },
    parentId: { title: "ParentId", type: "integer", "x-nullable": true },
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

export const department_update = async (
  id: string,
  data: definitions["Department"] | definitions["Department"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["department_update"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/department/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "department",
    verb: "put",
  };
  return dataLayerObj.requestApi(request, headers, force, data);
};
export const department_partial_updateFields = {
  required: ["shape", "status"],
  type: "object",
  properties: {
    id: { title: "ID", type: "integer", readOnly: true },
    name: { title: "Name", type: "string", maxLength: 100, "x-nullable": true },
    parentId: { title: "ParentId", type: "integer", "x-nullable": true },
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

export const department_partial_update = async (
  id: string,
  data: definitions["Department"] | definitions["Department"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<
    operations["department_partial_update"]["responses"][200]["schema"]
  >
> => {
  let endpoint = _apiPrefix + "/department/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "department",
    verb: "patch",
  };
  return dataLayerObj.requestApi(request, headers, force, data);
};
export const department_delete = async (
  id: string,
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<AxiosResponse<any["schema"]>> => {
  let endpoint = _apiPrefix + "/department/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "department",
    verb: "delete",
  };
  return dataLayerObj.requestApi(request, headers, force);
};
