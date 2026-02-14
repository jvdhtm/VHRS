import { annotateResource } from "@vhrs/resources";
import { definitions } from "@vhrs/resources";
import { AnnotatedResourceFields } from "@vhrs/resources";
import { commonAnnotations } from "./common";

const newAnnotations: AnnotatedResourceFields<definitions['ExpertiseProfile']> = {
  ...commonAnnotations
};

annotateResource("ExpertiseProfile", {
  fields: newAnnotations,
  display: {
    components: {
      asListItem: (data: any) => <span>{data.name}</span>,
      asTitle: () => <>Expertise Profile</>,
    }
  }
});
