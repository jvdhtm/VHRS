import { annotateResource } from "@vhrs/resources";
import { definitions } from "@vhrs/resources";
import { AnnotatedResourceFields } from "@vhrs/resources";
import { commonAnnotations } from "./common";

const newAnnotations: AnnotatedResourceFields<definitions['Staff']> = {
  ...commonAnnotations
};

annotateResource("Staff", {
  fields: newAnnotations,
  display: {
    components: {
      asListItem: (data: any) => <span>{data.title}</span>,
      asTitle: () => <>Staff</>,
    }
  }
});
