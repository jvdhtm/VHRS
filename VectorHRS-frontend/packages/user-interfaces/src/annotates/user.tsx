import { annotateResource } from "@vhrs/resources";
import { definitions, ResourceContext } from "@vhrs/resources";
import { AnnotatedResourceFields, DisplayResource } from "@vhrs/resources";
import { TableCell } from '@mui/material';
import { DynamicForm } from '../components/Dynamics/DynamicForm'; // Assuming DynamicForm is correctly implemented
import { commonAnnotations } from "./common";

const asForm: DisplayResource = (data?: any, ctx?: ResourceContext) => (
  <DynamicForm resource={ctx?.resource} includeFields={Object.keys(data)} />
);


const newAnnotations: AnnotatedResourceFields<definitions['User']> = {
  is_active: {
    display: {
      components:{
      asComponent: (data?: any) => <span>{data ? 'Active' : 'Inactive'}</span>,
      asTableCell: (data?: any) => <TableCell>{data ? 'Active' : 'Inactive'}</TableCell>,
      },
      admissions: 'DEFAULT_ADMIN', // Marking is_active as DEFAULT_ADMIN
    },
  },
  ...commonAnnotations
};

annotateResource("UserResource", {
  fields: newAnnotations,
  display: {
    components:{
      asList: (data: any) => <li>{data}</li>,
      asForm,
    },
    admissions: 'DEFAULT_ADMIN', // Pass the DEFAULT_ADMIN setting from newAnnotations
  },
});



