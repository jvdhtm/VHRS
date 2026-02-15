import { Box } from "@mui/material";
import  DynamicForm  from "../Dynamics/DynamicForm";
import { resources } from "@vhrs/resources";

const AddressForm = () => {
  return (
    <Box sx={{ p: 3 }}>
      <DynamicForm 
        resource={resources.Address} 
        includeFields={['person', 'description', 'address1', 'address2', 'zip', 'city', 'country', 'status']}  
      />
    </Box>
  );
};

export default AddressForm;
