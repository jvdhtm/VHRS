import { Box } from "@mui/material";
import DynamicForm from "../Dynamics/DynamicForm";
import { resources } from "@vhrs/resources";

const StaffStageForm = () => (
  <Box sx={{ p: 3 }}>
    <DynamicForm resource={resources.StaffStage} includeFields={['name', 'description', 'step', 'x', 'status']} />
  </Box>
);

export default StaffStageForm;
