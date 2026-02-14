import { annotateResource } from "@vhrs/resources";
import { definitions } from "@vhrs/resources";
import { AnnotatedResourceFields } from "@vhrs/resources";
import { commonAnnotations } from "./common";

const newAnnotations: AnnotatedResourceFields<definitions['StaffLog']> = {
  ...commonAnnotations
};

annotateResource("StaffLog", {
  fields: newAnnotations,
  display: {
    components: {
      asListItem: (data: any) => <span>{data.description}</span>,
      asTitle: () => <>Staff Log</>,
    }
  }
});
