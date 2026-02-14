import { Box } from "@mui/material";
import { DynamicList } from "../Dynamics/DynamicList";
import { resources } from "@vhrs/resources";

const UserList = () => {
  return (
    <Box sx={{ p: 3 }}>
      <DynamicList 
        resource={resources.User} 
        includeFields={['email', 'first_name', 'last_name', 'is_active', 'status']}  
      />
    </Box>
  );
};

export default UserList;
