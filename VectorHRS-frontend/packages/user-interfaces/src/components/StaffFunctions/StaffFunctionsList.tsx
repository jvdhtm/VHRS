import { Box } from "@mui/material";
import DynamicList from "../Dynamics/DynamicList";
import { resources } from "@vhrs/resources";

const StaffFunctionsList = () => (
  <Box sx={{ p: 3 }}>
    <DynamicList resource={resources.StaffFunctions} includeFields={['function', 'staff', 'status']} />
  </Box>
);

export default StaffFunctionsList;
