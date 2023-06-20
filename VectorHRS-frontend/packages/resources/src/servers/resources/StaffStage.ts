import type { Models } from "../../types";
import { ResourceObject } from "../../manage/resource";

const mockType = (): Models["StaffStage"] | undefined => {
  return;
};

export const StaffStageResource: ResourceObject = new ResourceObject({
  baseUrl: "/staffstage/",
  relatedurls: ["/staffstage/", "/staffstage/{id}/"],
  name: "StaffStageResource",
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

  required: ["step", "x", "status"],
});
