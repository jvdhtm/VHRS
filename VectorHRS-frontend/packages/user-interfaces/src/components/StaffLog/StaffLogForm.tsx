import { Box } from "@mui/material";
import DynamicForm from "../Dynamics/DynamicForm";
import { resources } from "@vhrs/resources";

const StaffLogForm = () => (
  <Box sx={{ p: 3 }}>
    <DynamicForm resource={resources.StaffLog} includeFields={['description', 'stage', 'with_person', 'status']} />
  </Box>
);

export default StaffLogForm;
