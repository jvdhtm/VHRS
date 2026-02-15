import { Box } from "@mui/material";
import DynamicTable from "../Dynamics/DynamicTable";
import { resources } from "@vhrs/resources";

const ExpertiseProfileTable = () => (
  <Box sx={{ p: 3 }}>
    <DynamicTable 
      resource={resources.ExpertiseProfile} 
      includeHeader={['id', 'name', 'description', 'person', 'expertise', 'status', 'created_date_time']} 
    />
  </Box>
);

export default ExpertiseProfileTable;
