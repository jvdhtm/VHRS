import { Box } from "@mui/material";
import  DynamicForm  from "../Dynamics/DynamicForm";
import { resources } from "@vhrs/resources";

const DepartmentForm = () => {
  return (
    <Box sx={{ p: 3 }}>
      <DynamicForm 
        resource={resources.Department} 
        includeFields={['name', 'parentId', 'description', 'shape', 'status']}  
      />
    </Box>
  );
};

export default DepartmentForm;
