import { Box } from "@mui/material";
import DynamicTable from "../Dynamics/DynamicTable";
import { resources } from "@vhrs/resources";

const StaffStageTable = () => (
  <Box sx={{ p: 3 }}>
    <DynamicTable resource={resources.StaffStage} includeHeader={['id', 'name', 'description', 'step', 'x', 'status', 'created_date_time']} />
  </Box>
);

export default StaffStageTable;
