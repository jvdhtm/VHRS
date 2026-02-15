import { Box } from "@mui/material";
import DynamicTable from "../Dynamics/DynamicTable";
import { resources } from "@vhrs/resources";

const AppTable = () => (
  <Box sx={{ p: 3 }}>
    <DynamicTable resource={resources.App} includeHeader={['id', 'title', 'pathUrl']} />
  </Box>
);

export default AppTable;
