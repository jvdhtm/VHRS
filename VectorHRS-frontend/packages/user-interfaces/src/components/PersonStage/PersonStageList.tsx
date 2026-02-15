import { Box } from "@mui/material";
import DynamicList from "../Dynamics/DynamicList";
import { resources } from "@vhrs/resources";

const PersonStageList = () => (
  <Box sx={{ p: 3 }}>
    <DynamicList resource={resources.PersonStage} includeFields={['name', 'step', 'status']} />
  </Box>
);

export default PersonStageList;
