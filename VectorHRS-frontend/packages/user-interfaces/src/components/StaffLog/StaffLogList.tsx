import { Box } from "@mui/material";
import DynamicList from "../Dynamics/DynamicList";
import { resources } from "@vhrs/resources";

const StaffLogList = () => (
  <Box sx={{ p: 3 }}>
    <DynamicList resource={resources.StaffLog} includeFields={['description', 'stage', 'status']} />
  </Box>
);

export default StaffLogList;
