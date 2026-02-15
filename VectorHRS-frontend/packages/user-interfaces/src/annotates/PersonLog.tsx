import { annotateResource } from "@vhrs/resources";
import { definitions } from "@vhrs/resources";
import { AnnotatedResourceFields } from "@vhrs/resources";
import { commonAnnotations, defaultActions } from "./common";

const newAnnotations: AnnotatedResourceFields<definitions['PersonLog']> = {
  ...commonAnnotations
};

annotateResource("PersonLog", {
  fields: newAnnotations,
  display: {
    components: {
      asListItem: (data: any) => <span>{data.description}</span>,
      asTitle: () => <>Person Log</>,
    }
  },
  actions: defaultActions
});
