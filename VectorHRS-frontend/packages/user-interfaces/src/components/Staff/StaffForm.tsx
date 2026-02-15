import { Box } from "@mui/material";
import  DynamicForm  from "../Dynamics/DynamicForm";
import { resources } from "@vhrs/resources";

const StaffForm = () => {
  return (
    <Box sx={{ p: 3 }}>
      <DynamicForm 
        resource={resources.Staff} 
        includeFields={['department', 'condition', 'title', 'bossId', 'who', 'x', 'y', 'level']}  
      />
    </Box>
  );
};

export default StaffForm;
