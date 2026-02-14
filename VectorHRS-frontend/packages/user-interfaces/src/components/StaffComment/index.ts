import { Box } from "@mui/material";
import { DynamicForm, DynamicTable, DynamicList } from "../Dynamics";
import { resources } from "@vhrs/resources";

const StaffCommentForm = () => (
  <Box sx={{ p: 3 }}>
    <DynamicForm resource={resources.StaffComment} includeFields={['staff', 'name', 'description', 'status']} />
  </Box>
);

const StaffCommentTable = () => (
  <Box sx={{ p: 3 }}>
    <DynamicTable resource={resources.StaffComment} includeHeader={['id', 'staff', 'name', 'description', 'status', 'created_date_time']} />
  </Box>
);

const StaffCommentList = () => (
  <Box sx={{ p: 3 }}>
    <DynamicList resource={resources.StaffComment} includeFields={['name', 'description', 'status']} />
  </Box>
);

export { StaffCommentForm, StaffCommentTable, StaffCommentList };
