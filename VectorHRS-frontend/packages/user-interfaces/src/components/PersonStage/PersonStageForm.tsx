import { Box } from "@mui/material";
import DynamicForm from "../Dynamics/DynamicForm";
import { resources } from "@vhrs/resources";

const PersonStageForm = () => (
  <Box sx={{ p: 3 }}>
    <DynamicForm resource={resources.PersonStage} includeFields={['name', 'description', 'step', 'x', 'status']} />
  </Box>
);

export default PersonStageForm;
