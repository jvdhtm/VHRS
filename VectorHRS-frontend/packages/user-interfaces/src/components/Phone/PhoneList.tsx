import { Box } from "@mui/material";
import DynamicList from "../Dynamics/DynamicList";
import { resources } from "@vhrs/resources";

const PhoneList = () => (
  <Box sx={{ p: 3 }}>
    <DynamicList resource={resources.Phone} includeFields={['phoneNumber', 'description', 'status']} />
  </Box>
);

export default PhoneList;
