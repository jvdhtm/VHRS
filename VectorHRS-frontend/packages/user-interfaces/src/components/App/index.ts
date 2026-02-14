import { Box } from "@mui/material";
import { DynamicForm, DynamicTable, DynamicList } from "../Dynamics";
import { resources } from "@vhrs/resources";

const AppForm = () => (
  <Box sx={{ p: 3 }}>
    <DynamicForm resource={resources.App} includeFields={['title', 'pathUrl']} />
  </Box>
);

const AppTable = () => (
  <Box sx={{ p: 3 }}>
    <DynamicTable resource={resources.App} includeHeader={['id', 'title', 'pathUrl']} />
  </Box>
);

const AppList = () => (
  <Box sx={{ p: 3 }}>
    <DynamicList resource={resources.App} includeFields={['title', 'pathUrl']} />
  </Box>
);

export { AppForm, AppTable, AppList };
