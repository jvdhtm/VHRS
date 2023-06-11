import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
import { dataLayerObj } from "../instance";
import type { RequestType } from "../instance";

export const personlog_listFields = [
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

export const personlog_list = async (
  data: operations["personlog_list"]["parameters"],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["personlog_list"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/personlog/";
  const request: RequestType = {
    endpoint,
    name: "personlog",
    verb: "get",
  };
  return await dataLayerObj.requestApi(request, headers, force, data.query);
};
export const personlog_createFields = {
  required: ["stage", "person", "status"],
  type: "object",
  properties: {
    id: { title: "ID", type: "integer", readOnly: true },
    description: {
      title: "Description",
      type: "string",
      maxLength: 100,
      "x-nullable": true,
    },
    stage: {
      title: "Stage",
      type: "integer",
      "x-vhrs-relatedResource": "people.PersonStage",
    },
    person: {
      title: "Person",
      type: "integer",
      "x-vhrs-relatedResource": "people.Person",
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

export const personlog_create = async (
  data: definitions["PersonLog"] | definitions["PersonLog"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["personlog_create"]["responses"][201]["schema"]>
> => {
  let endpoint = _apiPrefix + "/personlog/";
  const request: RequestType = {
    endpoint,
    name: "personlog",
    verb: "post",
  };
  return await dataLayerObj.requestApi(request, headers, force, data);
};
export const personlog_read = async (
  id: string,
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["personlog_read"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/personlog/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "personlog",
    verb: "get",
  };
  return await dataLayerObj.requestApi(request, headers, force);
};
export const personlog_updateFields = {
  required: ["stage", "person", "status"],
  type: "object",
  properties: {
    id: { title: "ID", type: "integer", readOnly: true },
    description: {
      title: "Description",
      type: "string",
      maxLength: 100,
      "x-nullable": true,
    },
    stage: {
      title: "Stage",
      type: "integer",
      "x-vhrs-relatedResource": "people.PersonStage",
    },
    person: {
      title: "Person",
      type: "integer",
      "x-vhrs-relatedResource": "people.Person",
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

export const personlog_update = async (
  id: string,
  data: definitions["PersonLog"] | definitions["PersonLog"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["personlog_update"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/personlog/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "personlog",
    verb: "put",
  };
  return dataLayerObj.requestApi(request, headers, force, data);
};
export const personlog_partial_updateFields = {
  required: ["stage", "person", "status"],
  type: "object",
  properties: {
    id: { title: "ID", type: "integer", readOnly: true },
    description: {
      title: "Description",
      type: "string",
      maxLength: 100,
      "x-nullable": true,
    },
    stage: {
      title: "Stage",
      type: "integer",
      "x-vhrs-relatedResource": "people.PersonStage",
    },
    person: {
      title: "Person",
      type: "integer",
      "x-vhrs-relatedResource": "people.Person",
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

export const personlog_partial_update = async (
  id: string,
  data: definitions["PersonLog"] | definitions["PersonLog"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<
    operations["personlog_partial_update"]["responses"][200]["schema"]
  >
> => {
  let endpoint = _apiPrefix + "/personlog/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "personlog",
    verb: "patch",
  };
  return dataLayerObj.requestApi(request, headers, force, data);
};
export const personlog_delete = async (
  id: string,
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<AxiosResponse<any["schema"]>> => {
  let endpoint = _apiPrefix + "/personlog/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "personlog",
    verb: "delete",
  };
  return dataLayerObj.requestApi(request, headers, force);
};
