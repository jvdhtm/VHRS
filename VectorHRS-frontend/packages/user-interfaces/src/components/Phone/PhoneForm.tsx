import { Box } from "@mui/material";
import DynamicForm from "../Dynamics/DynamicForm";
import { resources } from "@vhrs/resources";

const PhoneForm = () => (
  <Box sx={{ p: 3 }}>
    <DynamicForm resource={resources.Phone} includeFields={['person', 'description', 'phoneNumber', 'status']} />
  </Box>
);

export default PhoneForm;
