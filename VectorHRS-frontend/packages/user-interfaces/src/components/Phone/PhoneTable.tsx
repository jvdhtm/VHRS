import { Box } from "@mui/material";
import DynamicTable from "../Dynamics/DynamicTable";
import { resources } from "@vhrs/resources";

const PhoneTable = () => (
  <Box sx={{ p: 3 }}>
    <DynamicTable resource={resources.Phone} includeHeader={['id', 'person', 'description', 'phoneNumber', 'status', 'created_date_time']} />
  </Box>
);

export default PhoneTable;
