import type { Models } from "../../types";
import { ResourceObject } from "../../manage/resource";

const mockType = (): Models["StaffComment"] | undefined => {
  return;
};

export const StaffCommentResource: ResourceObject = new ResourceObject({
  baseUrl: "/staffcomment/",
  relatedurls: ["/staffcomment/", "/staffcomment/{id}/"],
  name: "StaffCommentResource",
  type: mockType,
  fields: {
    id: { title: "ID", type: "integer", readOnly: true },
    staff: {
      title: "Staff",
      type: "integer",
      "x-vhrs-relatedResource": "staff_api.Staff",
    },
    name: { title: "Name", type: "string", maxLength: 100, "x-nullable": true },
    description: {
      title: "Description",
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

  required: ["staff", "status"],
});
