import { Box } from "@mui/material";
import DynamicForm from "../Dynamics/DynamicForm";
import { resources } from "@vhrs/resources";

const FunctionForm = () => (
  <Box sx={{ p: 3 }}>
    <DynamicForm resource={resources.Function} includeFields={['name', 'description', 'shape', 'status']} />
  </Box>
);

export default FunctionForm;
