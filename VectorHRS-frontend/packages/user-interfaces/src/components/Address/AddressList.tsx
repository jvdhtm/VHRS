import { Box } from "@mui/material";
import  DynamicList from "../Dynamics/DynamicList";
import { resources } from "@vhrs/resources";

const AddressList = () => {
  return (
    <Box sx={{ p: 3 }}>
      <DynamicList 
        resource={resources.Address} 
        includeFields={['address1', 'city', 'zip', 'country', 'status']}  
      />
    </Box>
  );
};

export default AddressList;
