import { Box } from "@mui/material";
import DynamicTable from "../Dynamics/DynamicTable";
import { resources } from "@vhrs/resources";

const CommentTable = () => (
  <Box sx={{ p: 3 }}>
    <DynamicTable resource={resources.Comment} includeHeader={['id', 'name', 'autor', 'status', 'news', 'created_date_time']} />
  </Box>
);

export default CommentTable;
