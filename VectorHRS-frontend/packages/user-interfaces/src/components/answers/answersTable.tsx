import { Box } from "@mui/material";
import DynamicTable from "../Dynamics/DynamicTable";
import { resources } from "@vhrs/resources";

const answersTable = () => (
  <Box sx={{ p: 3 }}>
    <DynamicTable resource={resources.answers} includeHeader={['id', 'name', 'autor', 'status', 'question', 'created_date_time']} />
  </Box>
);

export default answersTable;
