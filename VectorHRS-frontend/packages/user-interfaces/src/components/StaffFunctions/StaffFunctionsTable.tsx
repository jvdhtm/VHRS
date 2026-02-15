import { Box } from "@mui/material";
import DynamicTable from "../Dynamics/DynamicTable";
import { resources } from "@vhrs/resources";

const StaffFunctionsTable = () => (
  <Box sx={{ p: 3 }}>
    <DynamicTable resource={resources.StaffFunctions} includeHeader={['id', 'function', 'staff', 'status', 'created_date_time']} />
  </Box>
);

export default StaffFunctionsTable;
