import { Box } from "@mui/material";
import DynamicList from "../Dynamics/DynamicList";
import { resources } from "@vhrs/resources";

const ConditionList = () => (
  <Box sx={{ p: 3 }}>
    <DynamicList resource={resources.Condition} includeFields={['severity', 'status']} />
  </Box>
);

export default ConditionList;
