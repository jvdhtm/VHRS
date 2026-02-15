import { Box } from "@mui/material";
import DynamicList from "../Dynamics/DynamicList";
import { resources } from "@vhrs/resources";

const StaffStageList = () => (
  <Box sx={{ p: 3 }}>
    <DynamicList resource={resources.StaffStage} includeFields={['name', 'step', 'status']} />
  </Box>
);

export default StaffStageList;
