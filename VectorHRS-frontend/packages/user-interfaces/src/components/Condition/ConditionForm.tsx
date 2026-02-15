import { Box } from "@mui/material";
import DynamicForm from "../Dynamics/DynamicForm";
import { resources } from "@vhrs/resources";

const ConditionForm = () => (
  <Box sx={{ p: 3 }}>
    <DynamicForm resource={resources.Condition} includeFields={['severity', 'status']} />
  </Box>
);

export default ConditionForm;
