import { Box } from "@mui/material";
import DynamicList from "../Dynamics/DynamicList";
import { resources } from "@vhrs/resources";

const ExpertiseList = () => (
  <Box sx={{ p: 3 }}>
    <DynamicList resource={resources.Expertise} includeFields={['name', 'description', 'status']} />
  </Box>
);

export default ExpertiseList;
