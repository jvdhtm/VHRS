import { Box } from "@mui/material";
import { DynamicTable } from "../Dynamics/DynamicTable";
import { resources } from "@vhrs/resources";

const StaffTable = () => {
  return (
    <Box sx={{ p: 3 }}>
      <DynamicTable 
        resource={resources.Staff} 
        includeHeader={['id', 'department', 'condition', 'title', 'who', 'x', 'y', 'level']}  
      />
    </Box>
  );
};

export default StaffTable;
