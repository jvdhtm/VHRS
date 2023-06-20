import type { Models } from "../../types";
import { ResourceObject } from "../../manage/resource";

const mockType = (): Models["Expertise"] | undefined => {
  return;
};

export const ExpertiseResource: ResourceObject = new ResourceObject({
  baseUrl: "/expertise/",
  relatedurls: ["/expertise/", "/expertise/{id}/"],
  name: "ExpertiseResource",
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
    parentId: {
      title: "ParentId",
      type: "integer",
      "x-vhrs-relatedResource": "people.Expertise",
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

  required: ["status"],
});
