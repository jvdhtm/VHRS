import { Box } from "@mui/material";
import { DynamicList } from "../Dynamics/DynamicList";
import { resources } from "@vhrs/resources";

const DepartmentList = () => {
  return (
    <Box sx={{ p: 3 }}>
      <DynamicList 
        resource={resources.Department} 
        includeFields={['name', 'shape', 'status']}  
      />
    </Box>
  );
};

export default DepartmentList;
