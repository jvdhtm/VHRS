import { Box } from "@mui/material";
import { DynamicForm, DynamicTable, DynamicList } from "../Dynamics";
import { resources } from "@vhrs/resources";

const StaffLogForm = () => (
  <Box sx={{ p: 3 }}>
    <DynamicForm resource={resources.StaffLog} includeFields={['description', 'stage', 'with_person', 'status']} />
  </Box>
);

const StaffLogTable = () => (
  <Box sx={{ p: 3 }}>
    <DynamicTable resource={resources.StaffLog} includeHeader={['id', 'description', 'stage', 'with_person', 'status', 'created_date_time']} />
  </Box>
);

const StaffLogList = () => (
  <Box sx={{ p: 3 }}>
    <DynamicList resource={resources.StaffLog} includeFields={['description', 'stage', 'status']} />
  </Box>
);

export { StaffLogForm, StaffLogTable, StaffLogList };
