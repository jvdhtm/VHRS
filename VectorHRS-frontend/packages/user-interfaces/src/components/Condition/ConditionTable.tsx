import { Box } from "@mui/material";
import DynamicTable from "../Dynamics/DynamicTable";
import { resources } from "@vhrs/resources";

const ConditionTable = () => (
  <Box sx={{ p: 3 }}>
    <DynamicTable resource={resources.Condition} includeHeader={['id', 'severity', 'status', 'created_date_time']} />
  </Box>
);

export default ConditionTable;
