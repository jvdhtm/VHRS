import { annotateResource } from "@vhrs/resources";
import { definitions } from "@vhrs/resources";
import { AnnotatedResourceFields } from "@vhrs/resources";
import { TableCell } from '@mui/material';
import { Person } from "@mui/icons-material"; // Import MUI icons as needed
import { commonAnnotations } from "./common";


const newAnnotations: AnnotatedResourceFields<definitions['User']> = {
  is_active: {
    display: {
      components:{
      asTitle: (data?: any) => <span>{data ? 'Active' : 'Inactive'}</span>,
      asTableCell: (data?: any) => <TableCell>{data ? 'Active' : 'Inactive'}</TableCell>,
      },
    },
  },
  ...commonAnnotations
};

annotateResource("UserResource", {
  fields: newAnnotations,
  display: {
    components:{
      asListItem: (data: any) => <li>{data}</li>,
      asTitle: () => <>User</>,
      asIcon: () => <Person/>
    },
    admissions: 'DEFAULT_ADMIN', // Pass the DEFAULT_ADMIN setting from newAnnotations
  },
  menu:[
    {
      partOf:'SIDEBAR',
      to:'./user'
    }

  ]
});



