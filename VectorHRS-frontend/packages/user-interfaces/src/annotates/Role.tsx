import { annotateResource } from "@vhrs/resources";
import { definitions } from "@vhrs/resources";
import { AnnotatedResourceFields } from "@vhrs/resources";
import { commonAnnotations } from "./common";

const newAnnotations: AnnotatedResourceFields<definitions['Role']> = {
  ...commonAnnotations
};

annotateResource("Role", {
  fields: newAnnotations,
  display: {
    components: {
      asListItem: (data: any) => <span>{data.title}</span>,
      asTitle: () => <>Role</>,
    }
  }
});
