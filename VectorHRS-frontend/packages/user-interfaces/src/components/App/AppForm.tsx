import { Box } from "@mui/material";
import DynamicForm from "../Dynamics/DynamicForm";
import { resources } from "@vhrs/resources";

const AppForm = () => (
  <Box sx={{ p: 3 }}>
    <DynamicForm resource={resources.App} includeFields={['title', 'pathUrl']} />
  </Box>
);

export default AppForm;
