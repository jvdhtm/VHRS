import { Box } from "@mui/material";
import  DynamicForm  from "../Dynamics/DynamicForm";
import { resources } from "@vhrs/resources";

const PersonForm = () => {
  return (
    <Box sx={{ p: 3 }}>
      <DynamicForm 
        resource={resources.Person} 
        includeFields={['firstname', 'lastname', 'age', 'nationalId', 'status']}  
      />
    </Box>
  );
};

export default PersonForm;
