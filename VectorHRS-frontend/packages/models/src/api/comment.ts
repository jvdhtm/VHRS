import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
import { dataLayerObj } from "../instance";
import type { RequestType } from "../instance";

export const comment_listFields = [
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

export const comment_list = async (
  data: operations["comment_list"]["parameters"],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["comment_list"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/comment/";
  const request: RequestType = {
    endpoint,
    name: "comment",
    verb: "get",
  };
  return await dataLayerObj.requestApi(request, headers, force, data.query);
};
export const comment_createFields = {
  required: ["autor", "status", "news"],
  type: "object",
  properties: {
    id: { title: "ID", type: "integer", readOnly: true },
    name: { title: "Name", type: "string", maxLength: 100, "x-nullable": true },
    html: { title: "Html", type: "string", "x-nullable": true },
    autor: {
      title: "Autor",
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
    news: {
      title: "News",
      type: "integer",
      "x-vhrs-relatedResource": "news.NewsLetter",
    },
  },
};

export const comment_create = async (
  data: definitions["Comment"] | definitions["Comment"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["comment_create"]["responses"][201]["schema"]>
> => {
  let endpoint = _apiPrefix + "/comment/";
  const request: RequestType = {
    endpoint,
    name: "comment",
    verb: "post",
  };
  return await dataLayerObj.requestApi(request, headers, force, data);
};
export const comment_read = async (
  id: string,
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["comment_read"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/comment/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "comment",
    verb: "get",
  };
  return await dataLayerObj.requestApi(request, headers, force);
};
export const comment_updateFields = {
  required: ["autor", "status", "news"],
  type: "object",
  properties: {
    id: { title: "ID", type: "integer", readOnly: true },
    name: { title: "Name", type: "string", maxLength: 100, "x-nullable": true },
    html: { title: "Html", type: "string", "x-nullable": true },
    autor: {
      title: "Autor",
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
    news: {
      title: "News",
      type: "integer",
      "x-vhrs-relatedResource": "news.NewsLetter",
    },
  },
};

export const comment_update = async (
  id: string,
  data: definitions["Comment"] | definitions["Comment"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["comment_update"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/comment/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "comment",
    verb: "put",
  };
  return dataLayerObj.requestApi(request, headers, force, data);
};
export const comment_partial_updateFields = {
  required: ["autor", "status", "news"],
  type: "object",
  properties: {
    id: { title: "ID", type: "integer", readOnly: true },
    name: { title: "Name", type: "string", maxLength: 100, "x-nullable": true },
    html: { title: "Html", type: "string", "x-nullable": true },
    autor: {
      title: "Autor",
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
    news: {
      title: "News",
      type: "integer",
      "x-vhrs-relatedResource": "news.NewsLetter",
    },
  },
};

export const comment_partial_update = async (
  id: string,
  data: definitions["Comment"] | definitions["Comment"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<
    operations["comment_partial_update"]["responses"][200]["schema"]
  >
> => {
  let endpoint = _apiPrefix + "/comment/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "comment",
    verb: "patch",
  };
  return dataLayerObj.requestApi(request, headers, force, data);
};
export const comment_delete = async (
  id: string,
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<AxiosResponse<any["schema"]>> => {
  let endpoint = _apiPrefix + "/comment/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "comment",
    verb: "delete",
  };
  return dataLayerObj.requestApi(request, headers, force);
};
