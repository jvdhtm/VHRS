import { Box } from "@mui/material";
import DynamicForm from "../Dynamics/DynamicForm";
import { resources } from "@vhrs/resources";

const PersonLogForm = () => (
  <Box sx={{ p: 3 }}>
    <DynamicForm resource={resources.PersonLog} includeFields={['description', 'stage', 'person', 'status']} />
  </Box>
);

export default PersonLogForm;
