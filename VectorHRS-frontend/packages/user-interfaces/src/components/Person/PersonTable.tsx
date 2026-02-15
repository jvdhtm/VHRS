import { Box } from "@mui/material";
import DynamicTable  from "../Dynamics/DynamicTable";
import { resources } from "@vhrs/resources";

const PersonTable = () => {
  return (
    <Box sx={{ p: 3 }}>
      <DynamicTable 
        resource={resources.Person} 
        includeHeader={['id', 'firstname', 'lastname', 'age', 'nationalId', 'status', 'created_date_time']}  
      />
    </Box>
  );
};

export default PersonTable;
