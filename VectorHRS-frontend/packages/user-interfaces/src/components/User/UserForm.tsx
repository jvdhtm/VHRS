import { Box } from "@mui/material";
import { DynamicForm } from "../Dynamics/DynamicForm";
import { resources } from "@vhrs/resources";

const UserForm = () => {
  return (
    <Box sx={{ p: 3 }}>
      <DynamicForm 
        resource={resources.User} 
        includeFields={['email', 'password', 'first_name', 'last_name', 'is_active', 'is_staff', 'status']}  
      />
    </Box>
  );
};

export default UserForm;
