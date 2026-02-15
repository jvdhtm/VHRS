import { annotateResource } from "@vhrs/resources";
import { definitions } from "@vhrs/resources";
import { AnnotatedResourceFields } from "@vhrs/resources";
import { commonAnnotations, defaultActions } from "./common";
import { People } from "@mui/icons-material";

const newAnnotations: AnnotatedResourceFields<definitions['Person']> = {
  ...commonAnnotations
};

annotateResource("Person", {
  fields: newAnnotations,
  display: {
    components:{
      asListItem: (data: any) => <li>{data}</li>,
      asTitle: () => <>People</>,
      asIcon: () => <People/>
    }
  },
  actions: defaultActions
});



