import { Box } from "@mui/material";
import DynamicForm from "../Dynamics/DynamicForm";
import { resources } from "@vhrs/resources";

const answersForm = () => (
  <Box sx={{ p: 3 }}>
    <DynamicForm resource={resources.answers} includeFields={['name', 'html', 'autor', 'status', 'question']} />
  </Box>
);

export default answersForm;
