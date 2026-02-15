import { Box } from "@mui/material";
import DynamicForm from "../Dynamics/DynamicForm";
import { resources } from "@vhrs/resources";

const StaffFunctionsForm = () => (
  <Box sx={{ p: 3 }}>
    <DynamicForm resource={resources.StaffFunctions} includeFields={['function', 'staff', 'status']} />
  </Box>
);

export default StaffFunctionsForm;
