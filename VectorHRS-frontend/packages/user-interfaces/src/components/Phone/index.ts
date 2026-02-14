import { Box } from "@mui/material";
import { DynamicForm, DynamicTable, DynamicList } from "../Dynamics";
import { resources } from "@vhrs/resources";

const PhoneForm = () => (
  <Box sx={{ p: 3 }}>
    <DynamicForm resource={resources.Phone} includeFields={['person', 'description', 'phoneNumber', 'status']} />
  </Box>
);

const PhoneTable = () => (
  <Box sx={{ p: 3 }}>
    <DynamicTable resource={resources.Phone} includeHeader={['id', 'person', 'description', 'phoneNumber', 'status', 'created_date_time']} />
  </Box>
);

const PhoneList = () => (
  <Box sx={{ p: 3 }}>
    <DynamicList resource={resources.Phone} includeFields={['phoneNumber', 'description', 'status']} />
  </Box>
);

export { PhoneForm, PhoneTable, PhoneList };
