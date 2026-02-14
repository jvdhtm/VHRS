import { Box } from "@mui/material";
import { DynamicTable } from "../Dynamics/DynamicTable";
import { resources } from "@vhrs/resources";

const DepartmentTable = () => {
  return (
    <Box sx={{ p: 3 }}>
      <DynamicTable 
        resource={resources.Department} 
        includeHeader={['id', 'name', 'parentId', 'description', 'shape', 'status', 'created_date_time']}  
      />
    </Box>
  );
};

export default DepartmentTable;
