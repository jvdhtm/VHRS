import { annotateResource } from "@vhrs/resources";
import { definitions } from "@vhrs/resources";
import { AnnotatedResourceFields } from "@vhrs/resources";
import { commonAnnotations } from "./common";
import { Contacts } from "@mui/icons-material";



const newAnnotations: AnnotatedResourceFields<definitions['Address']> = {
  ...commonAnnotations
};

annotateResource("AddressResource", {
  fields: newAnnotations,
  display: {
    components:{
      asListItem: (data: any) => <li>{data}</li>,
      asTitle: () => <>Address</>,
      asIcon: () => <Contacts/>
    },
    admissions: 'DEFAULT_ADMIN', // Pass the DEFAULT_ADMIN setting from newAnnotations
  },
  menu:[
    {
      partOf:'SIDEBAR',
      parent:'PersonResource'
    }

  ]
});



