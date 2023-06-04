import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
import { dataLayerObj } from "../instance";
import type { RequestType } from "../instance";

export const condition_listFields = [
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

export const condition_list = async (
  data: operations["condition_list"]["parameters"],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["condition_list"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/condition/";
  const request: RequestType = {
    endpoint,
    name: "condition",
    verb: "get",
  };
  return await dataLayerObj.requestApi(request, headers, force, data.query);
};
export const condition_createFields = {
  required: ["severity", "status"],
  type: "object",
  properties: {
    id: { title: "ID", type: "integer", readOnly: true },
    severity: {
      title: "Severity",
      type: "string",
      enum: ["small", "mild", "sever"],
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

export const condition_create = async (
  data: definitions["Condition"] | definitions["Condition"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["condition_create"]["responses"][201]["schema"]>
> => {
  let endpoint = _apiPrefix + "/condition/";
  const request: RequestType = {
    endpoint,
    name: "condition",
    verb: "post",
  };
  return await dataLayerObj.requestApi(request, headers, force, data);
};
export const condition_read = async (
  id: string,
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["condition_read"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/condition/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "condition",
    verb: "get",
  };
  return await dataLayerObj.requestApi(request, headers, force);
};
export const condition_updateFields = {
  required: ["severity", "status"],
  type: "object",
  properties: {
    id: { title: "ID", type: "integer", readOnly: true },
    severity: {
      title: "Severity",
      type: "string",
      enum: ["small", "mild", "sever"],
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

export const condition_update = async (
  id: string,
  data: definitions["Condition"] | definitions["Condition"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["condition_update"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/condition/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "condition",
    verb: "put",
  };
  return dataLayerObj.requestApi(request, headers, force, data);
};
export const condition_partial_updateFields = {
  required: ["severity", "status"],
  type: "object",
  properties: {
    id: { title: "ID", type: "integer", readOnly: true },
    severity: {
      title: "Severity",
      type: "string",
      enum: ["small", "mild", "sever"],
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

export const condition_partial_update = async (
  id: string,
  data: definitions["Condition"] | definitions["Condition"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<
    operations["condition_partial_update"]["responses"][200]["schema"]
  >
> => {
  let endpoint = _apiPrefix + "/condition/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "condition",
    verb: "patch",
  };
  return dataLayerObj.requestApi(request, headers, force, data);
};
export const condition_delete = async (
  id: string,
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<AxiosResponse<any["schema"]>> => {
  let endpoint = _apiPrefix + "/condition/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "condition",
    verb: "delete",
  };
  return dataLayerObj.requestApi(request, headers, force);
};
