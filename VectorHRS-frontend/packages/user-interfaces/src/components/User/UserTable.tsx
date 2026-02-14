import { Box } from "@mui/material";
import { DynamicTable } from "../Dynamics/DynamicTable";
import { resources } from "@vhrs/resources";

const UserTable = () => {
  return (
    <Box sx={{ p: 3 }}>
      <DynamicTable 
        resource={resources.User} 
        includeHeader={['id', 'email', 'first_name', 'last_name', 'is_active', 'is_staff', 'status']}  
      />
    </Box>
  );
};

export default UserTable;
