import { annotateResource } from "@vhrs/resources";
import { definitions } from "@vhrs/resources";
import { AnnotatedResourceFields } from "@vhrs/resources";
import { commonAnnotations, defaultActions } from "./common";

const newAnnotations: AnnotatedResourceFields<definitions['StaffFunctions']> = {
  ...commonAnnotations
};

annotateResource("StaffFunctions", {
  fields: newAnnotations,
  display: {
    components: {
      asListItem: (data: any) => <span>{data.function}</span>,
      asTitle: () => <>Staff Functions</>,
    }
  },
  actions: defaultActions
});
