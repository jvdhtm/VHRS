import { Box } from "@mui/material";
import DynamicList from "../Dynamics/DynamicList";
import { resources } from "@vhrs/resources";

const FunctionList = () => (
  <Box sx={{ p: 3 }}>
    <DynamicList resource={resources.Function} includeFields={['name', 'shape', 'status']} />
  </Box>
);

export default FunctionList;
