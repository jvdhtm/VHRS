import type { Models, ResourceObject } from "../../types";

const mockType = (): Models["PersonStage"] | undefined => {
  return;
};

export const PersonStageResource: ResourceObject = {
  baseUrl: "/personstage/",
  relatedurls: ["/personstage/", "/personstage/{id}/"],
  name: "PersonStageResource",
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

  required: ["step", "x", "status"],
};
