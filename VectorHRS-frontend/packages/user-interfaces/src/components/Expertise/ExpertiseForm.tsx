import { Box } from "@mui/material";
import DynamicForm from "../Dynamics/DynamicForm";
import { resources } from "@vhrs/resources";

const ExpertiseForm = () => (
  <Box sx={{ p: 3 }}>
    <DynamicForm resource={resources.Expertise} includeFields={['name', 'description', 'parentId', 'status']} />
  </Box>
);

export default ExpertiseForm;
