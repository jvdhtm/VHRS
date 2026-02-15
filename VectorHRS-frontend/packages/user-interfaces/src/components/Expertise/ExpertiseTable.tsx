import { Box } from "@mui/material";
import DynamicTable from "../Dynamics/DynamicTable";
import { resources } from "@vhrs/resources";

const ExpertiseTable = () => (
  <Box sx={{ p: 3 }}>
    <DynamicTable resource={resources.Expertise} includeHeader={['id', 'name', 'description', 'parentId', 'status', 'created_date_time']} />
  </Box>
);

export default ExpertiseTable;
