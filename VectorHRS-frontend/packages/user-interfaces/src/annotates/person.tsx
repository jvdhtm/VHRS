import { annotateResource } from "@vhrs/resources";
import { definitions } from "@vhrs/resources";
import { AnnotatedResourceFields } from "@vhrs/resources";
import { commonAnnotations } from "./common";
import { People } from "@mui/icons-material";



const newAnnotations: AnnotatedResourceFields<definitions['Person']> = {
  ...commonAnnotations
};

annotateResource("PersonResource", {
  fields: newAnnotations,
  display: {
    components:{
      asListItem: (data: any) => <li>{data}</li>,
      asTitle: () => <>People</>,
      asIcon: () => <People/>
    },
    admissions: 'DEFAULT_ADMIN', // Pass the DEFAULT_ADMIN setting from newAnnotations
  },
  menu:[
    {
      partOf:'SIDEBAR',
      to:'/dashboard'
    }

  ]
});



