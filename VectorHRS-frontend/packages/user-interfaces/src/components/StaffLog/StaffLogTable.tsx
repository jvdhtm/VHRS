import { Box } from "@mui/material";
import DynamicTable from "../Dynamics/DynamicTable";
import { resources } from "@vhrs/resources";

const StaffLogTable = () => (
  <Box sx={{ p: 3 }}>
    <DynamicTable resource={resources.StaffLog} includeHeader={['id', 'description', 'stage', 'with_person', 'status', 'created_date_time']} />
  </Box>
);

export default StaffLogTable;
