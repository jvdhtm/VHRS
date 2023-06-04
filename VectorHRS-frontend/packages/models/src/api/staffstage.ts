import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
import { dataLayerObj } from "../instance";
import type { RequestType } from "../instance";

export const staffstage_listFields = [
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

export const staffstage_list = async (
  data: operations["staffstage_list"]["parameters"],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["staffstage_list"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/staffstage/";
  const request: RequestType = {
    endpoint,
    name: "staffstage",
    verb: "get",
  };
  return await dataLayerObj.requestApi(request, headers, force, data.query);
};
export const staffstage_createFields = {
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
        "meeting",
        "surveys",
        "administrative",
        "complains",
        "problems",
        "feedBack",
        "requirements",
        "legal",
        "questions",
        "gifts",
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

export const staffstage_create = async (
  data: definitions["StaffStage"] | definitions["StaffStage"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["staffstage_create"]["responses"][201]["schema"]>
> => {
  let endpoint = _apiPrefix + "/staffstage/";
  const request: RequestType = {
    endpoint,
    name: "staffstage",
    verb: "post",
  };
  return await dataLayerObj.requestApi(request, headers, force, data);
};
export const staffstage_read = async (
  id: string,
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["staffstage_read"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/staffstage/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "staffstage",
    verb: "get",
  };
  return await dataLayerObj.requestApi(request, headers, force);
};
export const staffstage_updateFields = {
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
        "meeting",
        "surveys",
        "administrative",
        "complains",
        "problems",
        "feedBack",
        "requirements",
        "legal",
        "questions",
        "gifts",
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

export const staffstage_update = async (
  id: string,
  data: definitions["StaffStage"] | definitions["StaffStage"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["staffstage_update"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/staffstage/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "staffstage",
    verb: "put",
  };
  return dataLayerObj.requestApi(request, headers, force, data);
};
export const staffstage_partial_updateFields = {
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
        "meeting",
        "surveys",
        "administrative",
        "complains",
        "problems",
        "feedBack",
        "requirements",
        "legal",
        "questions",
        "gifts",
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

export const staffstage_partial_update = async (
  id: string,
  data: definitions["StaffStage"] | definitions["StaffStage"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<
    operations["staffstage_partial_update"]["responses"][200]["schema"]
  >
> => {
  let endpoint = _apiPrefix + "/staffstage/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "staffstage",
    verb: "patch",
  };
  return dataLayerObj.requestApi(request, headers, force, data);
};
export const staffstage_delete = async (
  id: string,
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<AxiosResponse<any["schema"]>> => {
  let endpoint = _apiPrefix + "/staffstage/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "staffstage",
    verb: "delete",
  };
  return dataLayerObj.requestApi(request, headers, force);
};
