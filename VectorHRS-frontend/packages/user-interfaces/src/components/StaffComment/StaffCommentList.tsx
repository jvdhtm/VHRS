import { Box } from "@mui/material";
import DynamicList from "../Dynamics/DynamicList";
import { resources } from "@vhrs/resources";

const StaffCommentList = () => (
  <Box sx={{ p: 3 }}>
    <DynamicList resource={resources.StaffComment} includeFields={['name', 'description', 'status']} />
  </Box>
);

export default StaffCommentList;
