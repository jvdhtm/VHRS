import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
import { dataLayerObj } from "../instance";
import type { RequestType } from "../instance";

export const expertiseprofile_listFields = [
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

export const expertiseprofile_list = async (
  data: operations["expertiseprofile_list"]["parameters"],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["expertiseprofile_list"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/expertiseprofile/";
  const request: RequestType = {
    endpoint,
    name: "expertiseprofile",
    verb: "get",
  };
  return await dataLayerObj.requestApi(request, headers, force, data.query);
};
export const expertiseprofile_createFields = {
  required: ["person", "expertise", "status"],
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
    person: { title: "Person", type: "integer" },
    expertise: { title: "Expertise", type: "integer" },
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

export const expertiseprofile_create = async (
  data: definitions["ExpertiseProfile"] | definitions["ExpertiseProfile"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<
    operations["expertiseprofile_create"]["responses"][201]["schema"]
  >
> => {
  let endpoint = _apiPrefix + "/expertiseprofile/";
  const request: RequestType = {
    endpoint,
    name: "expertiseprofile",
    verb: "post",
  };
  return await dataLayerObj.requestApi(request, headers, force, data);
};
export const expertiseprofile_read = async (
  id: string,
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["expertiseprofile_read"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/expertiseprofile/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "expertiseprofile",
    verb: "get",
  };
  return await dataLayerObj.requestApi(request, headers, force);
};
export const expertiseprofile_updateFields = {
  required: ["person", "expertise", "status"],
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
    person: { title: "Person", type: "integer" },
    expertise: { title: "Expertise", type: "integer" },
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

export const expertiseprofile_update = async (
  id: string,
  data: definitions["ExpertiseProfile"] | definitions["ExpertiseProfile"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<
    operations["expertiseprofile_update"]["responses"][200]["schema"]
  >
> => {
  let endpoint = _apiPrefix + "/expertiseprofile/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "expertiseprofile",
    verb: "put",
  };
  return dataLayerObj.requestApi(request, headers, force, data);
};
export const expertiseprofile_partial_updateFields = {
  required: ["person", "expertise", "status"],
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
    person: { title: "Person", type: "integer" },
    expertise: { title: "Expertise", type: "integer" },
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

export const expertiseprofile_partial_update = async (
  id: string,
  data: definitions["ExpertiseProfile"] | definitions["ExpertiseProfile"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<
    operations["expertiseprofile_partial_update"]["responses"][200]["schema"]
  >
> => {
  let endpoint = _apiPrefix + "/expertiseprofile/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "expertiseprofile",
    verb: "patch",
  };
  return dataLayerObj.requestApi(request, headers, force, data);
};
export const expertiseprofile_delete = async (
  id: string,
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<AxiosResponse<any["schema"]>> => {
  let endpoint = _apiPrefix + "/expertiseprofile/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "expertiseprofile",
    verb: "delete",
  };
  return dataLayerObj.requestApi(request, headers, force);
};
