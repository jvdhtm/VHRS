import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
import { dataLayerObj } from "../instance";
import type { RequestType } from "../instance";

export const personstage_listFields = [
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

export const personstage_list = async (
  data: operations["personstage_list"]["parameters"],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["personstage_list"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/personstage/";
  const request: RequestType = {
    endpoint,
    name: "personstage",
    verb: "get",
  };
  return await dataLayerObj.requestApi(request, headers, force, data.query);
};
export const personstage_createFields = {
  required: ["step", "x", "status"],
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
    step: {
      title: "Step",
      type: "string",
      enum: [
        "communication",
        "answers",
        "pending",
        "interview",
        "contract",
        "rejection",
        "refusal",
        "recommendation",
        "questions",
        "invitations",
      ],
    },
    x: { title: "X", type: "number" },
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

export const personstage_create = async (
  data: definitions["PersonStage"] | definitions["PersonStage"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["personstage_create"]["responses"][201]["schema"]>
> => {
  let endpoint = _apiPrefix + "/personstage/";
  const request: RequestType = {
    endpoint,
    name: "personstage",
    verb: "post",
  };
  return await dataLayerObj.requestApi(request, headers, force, data);
};
export const personstage_read = async (
  id: string,
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["personstage_read"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/personstage/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "personstage",
    verb: "get",
  };
  return await dataLayerObj.requestApi(request, headers, force);
};
export const personstage_updateFields = {
  required: ["step", "x", "status"],
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
    step: {
      title: "Step",
      type: "string",
      enum: [
        "communication",
        "answers",
        "pending",
        "interview",
        "contract",
        "rejection",
        "refusal",
        "recommendation",
        "questions",
        "invitations",
      ],
    },
    x: { title: "X", type: "number" },
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

export const personstage_update = async (
  id: string,
  data: definitions["PersonStage"] | definitions["PersonStage"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["personstage_update"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/personstage/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "personstage",
    verb: "put",
  };
  return dataLayerObj.requestApi(request, headers, force, data);
};
export const personstage_partial_updateFields = {
  required: ["step", "x", "status"],
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
    step: {
      title: "Step",
      type: "string",
      enum: [
        "communication",
        "answers",
        "pending",
        "interview",
        "contract",
        "rejection",
        "refusal",
        "recommendation",
        "questions",
        "invitations",
      ],
    },
    x: { title: "X", type: "number" },
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

export const personstage_partial_update = async (
  id: string,
  data: definitions["PersonStage"] | definitions["PersonStage"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<
    operations["personstage_partial_update"]["responses"][200]["schema"]
  >
> => {
  let endpoint = _apiPrefix + "/personstage/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "personstage",
    verb: "patch",
  };
  return dataLayerObj.requestApi(request, headers, force, data);
};
export const personstage_delete = async (
  id: string,
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<AxiosResponse<any["schema"]>> => {
  let endpoint = _apiPrefix + "/personstage/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "personstage",
    verb: "delete",
  };
  return dataLayerObj.requestApi(request, headers, force);
};
