import { annotateResource } from "@vhrs/resources";
import { definitions } from "@vhrs/resources";
import { AnnotatedResourceFields } from "@vhrs/resources";
import { commonAnnotations, defaultActions } from "./common";

const newAnnotations: AnnotatedResourceFields<definitions['Phone']> = {
  ...commonAnnotations
};

annotateResource("Phone", {
  fields: newAnnotations,
  display: {
    components: {
      asListItem: (data: any) => <span>{data.phoneNumber}</span>,
      asTitle: () => <>Phone</>,
    }
  },
  actions: defaultActions
});
