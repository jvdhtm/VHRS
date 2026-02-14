import { Box } from "@mui/material";
import { DynamicList } from "../Dynamics/DynamicList";
import { resources } from "@vhrs/resources";

const StaffList = () => {
  return (
    <Box sx={{ p: 3 }}>
      <DynamicList 
        resource={resources.Staff} 
        includeFields={['title', 'who', 'level']}  
      />
    </Box>
  );
};

export default StaffList;
