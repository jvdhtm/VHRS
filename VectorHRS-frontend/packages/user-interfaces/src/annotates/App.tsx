import { annotateResource } from "@vhrs/resources";
import { definitions } from "@vhrs/resources";
import { AnnotatedResourceFields } from "@vhrs/resources";
import { commonAnnotations } from "./common";
import { Apps } from "@mui/icons-material";

const newAnnotations: AnnotatedResourceFields<definitions['App']> = {
  ...commonAnnotations
};

annotateResource("App", {
  fields: newAnnotations,
  display: {
    components: {
      asListItem: (data: any) => <span>{data.title}</span>,
      asTitle: () => <>App</>,
      asIcon: () => <Apps/>
    }
  }
});
