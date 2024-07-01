// LoginResource.ts
import type { ResourceObject } from "@vhrs/resources";

export const LoginResource: ResourceObject = {
  name: "LoginResource",
  baseUrl: "/auth",
  fields: {
    username: { title: "Username", type: "string" },
    password: { title: "Password", type: "string" },
  },
};
