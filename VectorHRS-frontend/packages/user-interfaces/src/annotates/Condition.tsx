import { annotateResource } from "@vhrs/resources";
import { definitions } from "@vhrs/resources";
import { AnnotatedResourceFields } from "@vhrs/resources";
import { commonAnnotations } from "./common";

const newAnnotations: AnnotatedResourceFields<definitions['Condition']> = {
  ...commonAnnotations
};

annotateResource("Condition", {
  fields: newAnnotations,
  display: {
    components: {
      asListItem: (data: any) => <span>{data.severity}</span>,
      asTitle: () => <>Condition</>,
    }
  }
});
