import { operations, definitions } from "../schemas";
import { AxiosResponse } from "axios";
import { dataLayerObj } from "../instance";
import type { RequestType } from "../instance";

export const questionsrelatedlink_listFields = [
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

export const questionsrelatedlink_list = async (
  data: operations["questionsrelatedlink_list"]["parameters"],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<
    operations["questionsrelatedlink_list"]["responses"][200]["schema"]
  >
> => {
  let endpoint = _apiPrefix + "/questionsrelatedlink/";
  const request: RequestType = {
    endpoint,
    name: "questionsrelatedlink",
    verb: "get",
  };
  return await dataLayerObj.requestApi(request, headers, force, data.query);
};
export const questionsrelatedlink_createFields = {
  required: ["question"],
  type: "object",
  properties: {
    id: { title: "ID", type: "integer", readOnly: true },
    question: {
      title: "Question",
      type: "integer",
      "x-vhrs-relatedResource": "questions.Question",
    },
    name: { title: "Name", type: "string", maxLength: 100, "x-nullable": true },
    created_date_time: {
      title: "Created date time",
      type: "string",
      format: "date-time",
    },
  },
};

export const questionsrelatedlink_create = async (
  data:
    | definitions["QuestionsRelatedLink"]
    | definitions["QuestionsRelatedLink"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<
    operations["questionsrelatedlink_create"]["responses"][201]["schema"]
  >
> => {
  let endpoint = _apiPrefix + "/questionsrelatedlink/";
  const request: RequestType = {
    endpoint,
    name: "questionsrelatedlink",
    verb: "post",
  };
  return await dataLayerObj.requestApi(request, headers, force, data);
};
export const questionsrelatedlink_read = async (
  id: string,
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<
    operations["questionsrelatedlink_read"]["responses"][200]["schema"]
  >
> => {
  let endpoint = _apiPrefix + "/questionsrelatedlink/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "questionsrelatedlink",
    verb: "get",
  };
  return await dataLayerObj.requestApi(request, headers, force);
};
export const questionsrelatedlink_updateFields = {
  required: ["question"],
  type: "object",
  properties: {
    id: { title: "ID", type: "integer", readOnly: true },
    question: {
      title: "Question",
      type: "integer",
      "x-vhrs-relatedResource": "questions.Question",
    },
    name: { title: "Name", type: "string", maxLength: 100, "x-nullable": true },
    created_date_time: {
      title: "Created date time",
      type: "string",
      format: "date-time",
    },
  },
};

export const questionsrelatedlink_update = async (
  id: string,
  data:
    | definitions["QuestionsRelatedLink"]
    | definitions["QuestionsRelatedLink"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<
    operations["questionsrelatedlink_update"]["responses"][200]["schema"]
  >
> => {
  let endpoint = _apiPrefix + "/questionsrelatedlink/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "questionsrelatedlink",
    verb: "put",
  };
  return dataLayerObj.requestApi(request, headers, force, data);
};
export const questionsrelatedlink_partial_updateFields = {
  required: ["question"],
  type: "object",
  properties: {
    id: { title: "ID", type: "integer", readOnly: true },
    question: {
      title: "Question",
      type: "integer",
      "x-vhrs-relatedResource": "questions.Question",
    },
    name: { title: "Name", type: "string", maxLength: 100, "x-nullable": true },
    created_date_time: {
      title: "Created date time",
      type: "string",
      format: "date-time",
    },
  },
};

export const questionsrelatedlink_partial_update = async (
  id: string,
  data:
    | definitions["QuestionsRelatedLink"]
    | definitions["QuestionsRelatedLink"][],
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<
  AxiosResponse<
    operations["questionsrelatedlink_partial_update"]["responses"][200]["schema"]
  >
> => {
  let endpoint = _apiPrefix + "/questionsrelatedlink/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "questionsrelatedlink",
    verb: "patch",
  };
  return dataLayerObj.requestApi(request, headers, force, data);
};
export const questionsrelatedlink_delete = async (
  id: string,
  headers: any,
  _apiPrefix = "/api",
  force = false
): Promise<AxiosResponse<any["schema"]>> => {
  let endpoint = _apiPrefix + "/questionsrelatedlink/{id}/";
  endpoint = endpoint.replace("{id}", id.toString());
  const request: RequestType = {
    endpoint,
    name: "questionsrelatedlink",
    verb: "delete",
  };
  return dataLayerObj.requestApi(request, headers, force);
};
