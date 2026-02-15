import { annotateResource } from "@vhrs/resources";
import { definitions } from "@vhrs/resources";
import { AnnotatedResourceFields } from "@vhrs/resources";
import { commonAnnotations, defaultActions } from "./common";

const newAnnotations: AnnotatedResourceFields<definitions['answers']> = {
  ...commonAnnotations
};

annotateResource("answers", {
  fields: newAnnotations,
  display: {
    components: {
      asListItem: (data: any) => <span>{data.name}</span>,
      asTitle: () => <>Answer</>,
    }
  },
  actions: defaultActions
});
