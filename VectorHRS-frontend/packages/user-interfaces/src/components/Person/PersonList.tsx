import { Box } from "@mui/material";
import DynamicList from "../Dynamics/DynamicList";
import { resources } from "@vhrs/resources";

const PersonList = () => {
  return (
    <Box sx={{ p: 3 }}>
      <DynamicList 
        resource={resources.Person} 
        includeFields={['firstname', 'lastname', 'age', 'status']}  
      />
    </Box>
  );
};

export default PersonList;
