import { Box } from "@mui/material";
import DynamicList from "../Dynamics/DynamicList";
import { resources } from "@vhrs/resources";

const PersonLogList = () => (
  <Box sx={{ p: 3 }}>
    <DynamicList resource={resources.PersonLog} includeFields={['description', 'stage', 'person', 'status']} />
  </Box>
);

export default PersonLogList;
