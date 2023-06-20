import type { Models } from "../../types";
import { ResourceObject } from "../../manage/resource";

const mockType = (): Models["Function"] | undefined => {
  return;
};

export const FunctionResource: ResourceObject = new ResourceObject({
  baseUrl: "/function/",
  relatedurls: ["/function/", "/function/{id}/"],
  name: "FunctionResource",
  type: mockType,
  fields: {
    id: { title: "ID", type: "integer", readOnly: true },
    name: { title: "Name", type: "string", maxLength: 100, "x-nullable": true },
    description: {
      title: "Description",
      type: "string",
      maxLength: 100,
      "x-nullable": true,
    },
    shape: {
      title: "Shape",
      type: "string",
      enum: ["circle", "square", "rectangle", "triangle"],
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

  required: ["shape", "status"],
});
