import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
import { dataLayerObj } from "../instance";
import type { RequestType } from "../instance";

export const newsrelatedlink_listFields = [
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

export const newsrelatedlink_list = async (
  data: operations["newsrelatedlink_list"]["parameters"],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["newsrelatedlink_list"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/newsrelatedlink/";
  const request: RequestType = {
    endpoint,
    name: "newsrelatedlink",
    verb: "get",
  };
  return await dataLayerObj.requestApi(request, headers, force, data.query);
};
export const newsrelatedlink_createFields = {
  required: ["news"],
  type: "object",
  properties: {
    id: { title: "ID", type: "integer", readOnly: true },
    news: { title: "News", type: "integer" },
    name: { title: "Name", type: "string", maxLength: 100, "x-nullable": true },
    created_date_time: {
      title: "Created date time",
      type: "string",
      format: "date-time",
    },
  },
};

export const newsrelatedlink_create = async (
  data: definitions["NewsRelatedLink"] | definitions["NewsRelatedLink"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<
    operations["newsrelatedlink_create"]["responses"][201]["schema"]
  >
> => {
  let endpoint = _apiPrefix + "/newsrelatedlink/";
  const request: RequestType = {
    endpoint,
    name: "newsrelatedlink",
    verb: "post",
  };
  return await dataLayerObj.requestApi(request, headers, force, data);
};
export const newsrelatedlink_read = async (
  id: string,
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<operations["newsrelatedlink_read"]["responses"][200]["schema"]>
> => {
  let endpoint = _apiPrefix + "/newsrelatedlink/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "newsrelatedlink",
    verb: "get",
  };
  return await dataLayerObj.requestApi(request, headers, force);
};
export const newsrelatedlink_updateFields = {
  required: ["news"],
  type: "object",
  properties: {
    id: { title: "ID", type: "integer", readOnly: true },
    news: { title: "News", type: "integer" },
    name: { title: "Name", type: "string", maxLength: 100, "x-nullable": true },
    created_date_time: {
      title: "Created date time",
      type: "string",
      format: "date-time",
    },
  },
};

export const newsrelatedlink_update = async (
  id: string,
  data: definitions["NewsRelatedLink"] | definitions["NewsRelatedLink"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<
    operations["newsrelatedlink_update"]["responses"][200]["schema"]
  >
> => {
  let endpoint = _apiPrefix + "/newsrelatedlink/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "newsrelatedlink",
    verb: "put",
  };
  return dataLayerObj.requestApi(request, headers, force, data);
};
export const newsrelatedlink_partial_updateFields = {
  required: ["news"],
  type: "object",
  properties: {
    id: { title: "ID", type: "integer", readOnly: true },
    news: { title: "News", type: "integer" },
    name: { title: "Name", type: "string", maxLength: 100, "x-nullable": true },
    created_date_time: {
      title: "Created date time",
      type: "string",
      format: "date-time",
    },
  },
};

export const newsrelatedlink_partial_update = async (
  id: string,
  data: definitions["NewsRelatedLink"] | definitions["NewsRelatedLink"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<
    operations["newsrelatedlink_partial_update"]["responses"][200]["schema"]
  >
> => {
  let endpoint = _apiPrefix + "/newsrelatedlink/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "newsrelatedlink",
    verb: "patch",
  };
  return dataLayerObj.requestApi(request, headers, force, data);
};
export const newsrelatedlink_delete = async (
  id: string,
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<AxiosResponse<any["schema"]>> => {
  let endpoint = _apiPrefix + "/newsrelatedlink/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "newsrelatedlink",
    verb: "delete",
  };
  return dataLayerObj.requestApi(request, headers, force);
};
