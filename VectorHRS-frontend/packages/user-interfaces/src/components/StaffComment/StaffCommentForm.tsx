import { Box } from "@mui/material";
import DynamicForm from "../Dynamics/DynamicForm";
import { resources } from "@vhrs/resources";

const StaffCommentForm = () => (
  <Box sx={{ p: 3 }}>
    <DynamicForm resource={resources.StaffComment} includeFields={['staff', 'name', 'description', 'status']} />
  </Box>
);

export default StaffCommentForm;
