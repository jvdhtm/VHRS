import { Box } from "@mui/material";
import DynamicForm from "../Dynamics/DynamicForm";
import { resources } from "@vhrs/resources";

const ExpertiseProfileForm = () => (
  <Box sx={{ p: 3 }}>
    <DynamicForm 
      resource={resources.ExpertiseProfile} 
      includeFields={['name', 'description', 'person', 'expertise', 'status']} 
    />
  </Box>
);

export default ExpertiseProfileForm;
