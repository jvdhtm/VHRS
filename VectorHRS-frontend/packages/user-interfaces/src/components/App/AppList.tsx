import { Box } from "@mui/material";
import DynamicList from "../Dynamics/DynamicList";
import { resources } from "@vhrs/resources";

const AppList = () => (
  <Box sx={{ p: 3 }}>
    <DynamicList resource={resources.App} includeFields={['title', 'pathUrl']} />
  </Box>
);

export default AppList;
