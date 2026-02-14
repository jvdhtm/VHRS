import { annotateResource } from "@vhrs/resources";
import { definitions } from "@vhrs/resources";
import { AnnotatedResourceFields } from "@vhrs/resources";
import { commonAnnotations } from "./common";
import { Business } from "@mui/icons-material";

const newAnnotations: AnnotatedResourceFields<definitions['Department']> = {
  ...commonAnnotations
};

annotateResource("Department", {
  fields: newAnnotations,
  display: {
    components: {
      asListItem: (data: any) => <span>{data.name}</span>,
      asTitle: () => <>Department</>,
      asIcon: () => <Business/>
    }
  }
});
