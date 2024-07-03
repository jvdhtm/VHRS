import { annotateResource, ResourceObject, resources } from "@vhrs/resources";
import { definitions, ResourceContext } from "@vhrs/resources";
import { AnnotatedResourceFields, DisplayResource } from "@vhrs/resources";
import { TableCell } from '@mui/material';
import { DynamicForm } from '../components/Dynamics/DynamicForm'; // Assuming DynamicForm is correctly implemented
import { commonAnnotations } from "./common";

const asForm: DisplayResource = (data: any, ctx: any) => (
  <DynamicForm resource={ctx.res} includeFields={Object.keys(data)} />
);

const newAnnotations: AnnotatedResourceFields<definitions['User']> = {
  id: {
    display: {
      asComponent: (data: any, ctx: ResourceContext) => <span>{data}</span>,
      // Removed asFormInput for id field if it exists in default
      asTablecell: (data: any, ctx: ResourceContext) => <TableCell>{data}</TableCell>,
      admissions: 'DEFAULT_ADMIN', // Marking id as DEFAULT_ADMIN
    },
  },
  email: {
    display: {
      asComponent: (data: any, ctx: ResourceContext) => <span>{data}</span>,
      asTablecell: (data: any, ctx: ResourceContext) => <TableCell>{data}</TableCell>,
      admissions: 'GENERAL', // Marking email as GENERAL
    },
  },
  passcode: {
    display: {
      asComponent: (data: any, ctx: ResourceContext) => <span>{data}</span>,
      asTablecell: (data: any, ctx: ResourceContext) => <TableCell>{data}</TableCell>,
      admissions: 'GENERAL', // Marking passcode as GENERAL
    },
  },
  first_name: {
    display: {
      asComponent: (data: any, ctx: ResourceContext) => <span>{data}</span>,
      asTablecell: (data: any, ctx: ResourceContext) => <TableCell>{data}</TableCell>,
      admissions: 'DEFAULT_ADMIN', // Marking first_name as DEFAULT_ADMIN
    },
  },
  last_name: {
    display: {
      asComponent: (data: any, ctx: ResourceContext) => <span>{data}</span>,
      asTablecell: (data: any, ctx: ResourceContext) => <TableCell>{data}</TableCell>,
      admissions: 'DEFAULT_ADMIN', // Marking last_name as DEFAULT_ADMIN
    },
  },
  is_active: {
    display: {
      asComponent: (data: any, ctx: ResourceContext) => <span>{data ? 'Active' : 'Inactive'}</span>,
      asTablecell: (data: any, ctx: ResourceContext) => <TableCell>{data ? 'Active' : 'Inactive'}</TableCell>,
      admissions: 'DEFAULT_ADMIN', // Marking is_active as GENERAL
    },
  },
  ...commonAnnotations
};

annotateResource("UserResource", {
  fields: newAnnotations,
  display: {
    asList: (data: any, ctx: any) => <div>{data}</div>,
    asForm,
    admissions: 'DEFAULT_ADMIN', // Pass the DEFAULT_ADMIN setting from newAnnotations
  },
});



