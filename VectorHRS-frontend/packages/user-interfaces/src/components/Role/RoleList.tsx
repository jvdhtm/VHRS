import { Box } from "@mui/material";
import DynamicList from "../Dynamics/DynamicList";
import { resources } from "@vhrs/resources";

const RoleList = () => {
  return (
    <Box sx={{ p: 3 }}>
      <DynamicList 
        resource={resources.Role} 
        includeFields={['title', 'permission']}  
      />
    </Box>
  );
};

export default RoleList;
