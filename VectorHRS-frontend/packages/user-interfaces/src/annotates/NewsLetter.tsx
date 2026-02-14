import { annotateResource } from "@vhrs/resources";
import { definitions } from "@vhrs/resources";
import { AnnotatedResourceFields } from "@vhrs/resources";
import { commonAnnotations } from "./common";
import { Newspaper } from "@mui/icons-material";

const newAnnotations: AnnotatedResourceFields<definitions['NewsLetter']> = {
  ...commonAnnotations
};

annotateResource("NewsLetter", {
  fields: newAnnotations,
  display: {
    components: {
      asListItem: (data: any) => <span>{data.name}</span>,
      asTitle: () => <>News</>,
      asIcon: () => <Newspaper/>
    }
  }
});
