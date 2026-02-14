import { annotateResource } from "@vhrs/resources";
import { definitions } from "@vhrs/resources";
import { AnnotatedResourceFields } from "@vhrs/resources";
import { commonAnnotations } from "./common";
import { Contacts } from "@mui/icons-material";



const newAnnotations: AnnotatedResourceFields<definitions['Address']> = {
  ...commonAnnotations
};

annotateResource("Address", {
  fields: newAnnotations,
  display: {
    components:{
      asListItem: (data: any) => <li>{data}</li>,
      asTitle: () => <>Address</>,
      asIcon: () => <Contacts/>
    },
    access: ()=>true,
    partOf:'DEFAULT_ADMIN'
  },
  menu:[
    {
      partOf:'SIDEBAR',
      parent:'PersonResource'
    }

  ]
});



