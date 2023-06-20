import type { Models } from "../../types";
import { ResourceObject } from "../../manage/resource";

const mockType = (): Models["App"] | undefined => {
  return;
};

export const AppResource: ResourceObject = new ResourceObject({
  baseUrl: "/app/",
  relatedurls: ["/app/", "/app/{id}/"],
  name: "AppResource",
  type: mockType,
  fields: {
    id: { title: "ID", type: "integer", readOnly: true },
    title: { title: "Title", type: "string", maxLength: 30, minLength: 1 },
    pathUrl: { title: "PathUrl", type: "string", maxLength: 30, minLength: 1 },
  },

  required: ["title", "pathUrl"],
});
