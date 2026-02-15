import { Box } from "@mui/material";
import  DynamicForm  from "../Dynamics/DynamicForm";
import { resources } from "@vhrs/resources";

const RoleForm = () => {
  return (
    <Box sx={{ p: 3 }}>
      <DynamicForm 
        resource={resources.Role} 
        includeFields={['title', 'user', 'permission', 'app']}  
      />
    </Box>
  );
};

export default RoleForm;
