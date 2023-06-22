import type { Models, ResourceObject } from "../../types";

const mockType = (): Models["NewsRelatedLink"] | undefined => {
  return;
};

export const NewsRelatedLinkResource: ResourceObject = {
  baseUrl: "/newsrelatedlink/",
  relatedurls: ["/newsrelatedlink/", "/newsrelatedlink/{id}/"],
  name: "NewsRelatedLinkResource",
  type: mockType,
  fields: {
    id: { title: "ID", type: "integer", readOnly: true },
    news: {
      title: "News",
      type: "integer",
      "x-vhrs-relatedResource": "news.NewsLetter",
    },
    name: { title: "Name", type: "string", maxLength: 100, "x-nullable": true },
    created_date_time: {
      title: "Created date time",
      type: "string",
      format: "date-time",
    },
  },

  required: ["news"],
};
