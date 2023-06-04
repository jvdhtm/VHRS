import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
import { dataLayerObj } from "../instance";
import type { RequestType } from "../instance";

export const address_listFields = [
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

export const address_list = async (
  data: operations["address_list"]["parameters"],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["address_list"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/address/";
  const request: RequestType = {
    endpoint,
    name: "address",
    verb: "get",
  };
  return await dataLayerObj.requestApi(request, headers, force, data.query);
};
export const address_createFields = {
  required: ["person", "status"],
  type: "object",
  properties: {
    id: { title: "ID", type: "integer", readOnly: true },
    person: { title: "Person", type: "integer" },
    description: {
      title: "Description",
      type: "string",
      maxLength: 100,
      "x-nullable": true,
    },
    address1: {
      title: "Address1",
      type: "string",
      maxLength: 100,
      "x-nullable": true,
    },
    address2: {
      title: "Address2",
      type: "string",
      maxLength: 100,
      "x-nullable": true,
    },
    zip: { title: "Zip", type: "string", maxLength: 10, "x-nullable": true },
    city: { title: "City", type: "string", maxLength: 100, "x-nullable": true },
    country: {
      title: "Country",
      type: "string",
      maxLength: 100,
      "x-nullable": true,
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

export const address_create = async (
  data: definitions["Address"] | definitions["Address"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["address_create"]["responses"][201]["schema"]>
> => {
  let endpoint = _apiPrefix + "/address/";
  const request: RequestType = {
    endpoint,
    name: "address",
    verb: "post",
  };
  return await dataLayerObj.requestApi(request, headers, force, data);
};
export const address_read = async (
  id: string,
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["address_read"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/address/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "address",
    verb: "get",
  };
  return await dataLayerObj.requestApi(request, headers, force);
};
export const address_updateFields = {
  required: ["person", "status"],
  type: "object",
  properties: {
    id: { title: "ID", type: "integer", readOnly: true },
    person: { title: "Person", type: "integer" },
    description: {
      title: "Description",
      type: "string",
      maxLength: 100,
      "x-nullable": true,
    },
    address1: {
      title: "Address1",
      type: "string",
      maxLength: 100,
      "x-nullable": true,
    },
    address2: {
      title: "Address2",
      type: "string",
      maxLength: 100,
      "x-nullable": true,
    },
    zip: { title: "Zip", type: "string", maxLength: 10, "x-nullable": true },
    city: { title: "City", type: "string", maxLength: 100, "x-nullable": true },
    country: {
      title: "Country",
      type: "string",
      maxLength: 100,
      "x-nullable": true,
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

export const address_update = async (
  id: string,
  data: definitions["Address"] | definitions["Address"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["address_update"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/address/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "address",
    verb: "put",
  };
  return dataLayerObj.requestApi(request, headers, force, data);
};
export const address_partial_updateFields = {
  required: ["person", "status"],
  type: "object",
  properties: {
    id: { title: "ID", type: "integer", readOnly: true },
    person: { title: "Person", type: "integer" },
    description: {
      title: "Description",
      type: "string",
      maxLength: 100,
      "x-nullable": true,
    },
    address1: {
      title: "Address1",
      type: "string",
      maxLength: 100,
      "x-nullable": true,
    },
    address2: {
      title: "Address2",
      type: "string",
      maxLength: 100,
      "x-nullable": true,
    },
    zip: { title: "Zip", type: "string", maxLength: 10, "x-nullable": true },
    city: { title: "City", type: "string", maxLength: 100, "x-nullable": true },
    country: {
      title: "Country",
      type: "string",
      maxLength: 100,
      "x-nullable": true,
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

export const address_partial_update = async (
  id: string,
  data: definitions["Address"] | definitions["Address"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<
    operations["address_partial_update"]["responses"][200]["schema"]
  >
> => {
  let endpoint = _apiPrefix + "/address/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "address",
    verb: "patch",
  };
  return dataLayerObj.requestApi(request, headers, force, data);
};
export const address_delete = async (
  id: string,
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<AxiosResponse<any["schema"]>> => {
  let endpoint = _apiPrefix + "/address/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "address",
    verb: "delete",
  };
  return dataLayerObj.requestApi(request, headers, force);
};
