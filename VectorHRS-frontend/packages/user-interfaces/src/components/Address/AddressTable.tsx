import { Box } from "@mui/material";
import { DynamicTable } from "../Dynamics/DynamicTable";
import { resources } from "@vhrs/resources";

const AddressTable = () => {
  return (
    <Box sx={{ p: 3 }}>
      <DynamicTable 
        resource={resources.Address} 
        includeHeader={['id', 'person', 'address1', 'address2', 'city', 'zip', 'country', 'status', 'created_date_time']}  
      />
    </Box>
  );
};

export default AddressTable;
