import { annotateResource } from "@vhrs/resources";
import { definitions } from "@vhrs/resources";
import { AnnotatedResourceFields } from "@vhrs/resources";
import { commonAnnotations } from "./common";
import { Help } from "@mui/icons-material";

const newAnnotations: AnnotatedResourceFields<definitions['Question']> = {
  ...commonAnnotations
};

annotateResource("Question", {
  fields: newAnnotations,
  display: {
    components: {
      asListItem: (data: any) => <span>{data.name}</span>,
      asTitle: () => <>Question</>,
      asIcon: () => <Help/>
    }
  }
});
