import { Box } from "@mui/material";
import DynamicList from "../Dynamics/DynamicList";
import { resources } from "@vhrs/resources";

const CommentList = () => (
  <Box sx={{ p: 3 }}>
    <DynamicList resource={resources.Comment} includeFields={['name', 'autor', 'status']} />
  </Box>
);

export default CommentList;
