import { Box } from "@mui/material";
import { DynamicForm, DynamicTable, DynamicList } from "../Dynamics";
import { resources } from "@vhrs/resources";

const PersonLogForm = () => (
  <Box sx={{ p: 3 }}>
    <DynamicForm resource={resources.PersonLog} includeFields={['description', 'stage', 'person', 'status']} />
  </Box>
);

const PersonLogTable = () => (
  <Box sx={{ p: 3 }}>
    <DynamicTable resource={resources.PersonLog} includeHeader={['id', 'description', 'stage', 'person', 'status', 'created_date_time']} />
  </Box>
);

const PersonLogList = () => (
  <Box sx={{ p: 3 }}>
    <DynamicList resource={resources.PersonLog} includeFields={['description', 'stage', 'person', 'status']} />
  </Box>
);

export { PersonLogForm, PersonLogTable, PersonLogList };
