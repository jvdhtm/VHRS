import { Box } from "@mui/material";
import DynamicList from "../Dynamics/DynamicList";
import { resources } from "@vhrs/resources";

const ExpertiseProfileList = () => (
  <Box sx={{ p: 3 }}>
    <DynamicList 
      resource={resources.ExpertiseProfile} 
      includeFields={['name', 'person', 'status']} 
    />
  </Box>
);

export default ExpertiseProfileList;
