import type { Models, ResourceObject } from "../../types";

const mockType = (): Models["User"] | undefined => {
  return;
};

export const UserResource: ResourceObject = {
  baseUrl: "/user/",
  relatedurls: ["/user/", "/user/{id}/"],
  name: "UserResource",
  type: mockType,
  fields: {
    id: { title: "ID", type: "integer", readOnly: true },
    email: {
      title: "Email address",
      type: "string",
      format: "email",
      maxLength: 255,
      minLength: 1,
    },
    passcode: {
      title: "Passcode",
      type: "string",
      maxLength: 1024,
      minLength: 1,
    },
    first_name: {
      title: "First name",
      type: "string",
      maxLength: 30,
      minLength: 1,
    },
    last_name: {
      title: "Last name",
      type: "string",
      maxLength: 30,
      minLength: 1,
    },
    is_active: { title: "Is active", type: "boolean" },
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

  required: ["email", "passcode", "first_name", "last_name"],
};
