import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
import { dataLayerObj } from "../instance";
import type { RequestType } from "../instance";

export const stafffunctions_listFields = [
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

export const stafffunctions_list = async (
  data: operations["stafffunctions_list"]["parameters"],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["stafffunctions_list"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/stafffunctions/";
  const request: RequestType = {
    endpoint,
    name: "stafffunctions",
    verb: "get",
  };
  return await dataLayerObj.requestApi(request, headers, force, data.query);
};
export const stafffunctions_createFields = {
  required: ["function", "staff", "status"],
  type: "object",
  properties: {
    id: { title: "ID", type: "integer", readOnly: true },
    function: {
      title: "Function",
      type: "integer",
      "x-vhrs-relatedResource": "staff_api.Function",
    },
    staff: {
      title: "Staff",
      type: "integer",
      "x-vhrs-relatedResource": "staff_api.Staff",
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

export const stafffunctions_create = async (
  data: definitions["StaffFunctions"] | definitions["StaffFunctions"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["stafffunctions_create"]["responses"][201]["schema"]>
> => {
  let endpoint = _apiPrefix + "/stafffunctions/";
  const request: RequestType = {
    endpoint,
    name: "stafffunctions",
    verb: "post",
  };
  return await dataLayerObj.requestApi(request, headers, force, data);
};
export const stafffunctions_read = async (
  id: string,
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["stafffunctions_read"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/stafffunctions/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "stafffunctions",
    verb: "get",
  };
  return await dataLayerObj.requestApi(request, headers, force);
};
export const stafffunctions_updateFields = {
  required: ["function", "staff", "status"],
  type: "object",
  properties: {
    id: { title: "ID", type: "integer", readOnly: true },
    function: {
      title: "Function",
      type: "integer",
      "x-vhrs-relatedResource": "staff_api.Function",
    },
    staff: {
      title: "Staff",
      type: "integer",
      "x-vhrs-relatedResource": "staff_api.Staff",
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

export const stafffunctions_update = async (
  id: string,
  data: definitions["StaffFunctions"] | definitions["StaffFunctions"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["stafffunctions_update"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/stafffunctions/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "stafffunctions",
    verb: "put",
  };
  return dataLayerObj.requestApi(request, headers, force, data);
};
export const stafffunctions_partial_updateFields = {
  required: ["function", "staff", "status"],
  type: "object",
  properties: {
    id: { title: "ID", type: "integer", readOnly: true },
    function: {
      title: "Function",
      type: "integer",
      "x-vhrs-relatedResource": "staff_api.Function",
    },
    staff: {
      title: "Staff",
      type: "integer",
      "x-vhrs-relatedResource": "staff_api.Staff",
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

export const stafffunctions_partial_update = async (
  id: string,
  data: definitions["StaffFunctions"] | definitions["StaffFunctions"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<
    operations["stafffunctions_partial_update"]["responses"][200]["schema"]
  >
> => {
  let endpoint = _apiPrefix + "/stafffunctions/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "stafffunctions",
    verb: "patch",
  };
  return dataLayerObj.requestApi(request, headers, force, data);
};
export const stafffunctions_delete = async (
  id: string,
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<AxiosResponse<any["schema"]>> => {
  let endpoint = _apiPrefix + "/stafffunctions/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "stafffunctions",
    verb: "delete",
  };
  return dataLayerObj.requestApi(request, headers, force);
};
