import { Box } from "@mui/material";
import { DynamicForm, DynamicTable, DynamicList } from "../Dynamics";
import { resources } from "@vhrs/resources";

const CommentForm = () => (
  <Box sx={{ p: 3 }}>
    <DynamicForm resource={resources.Comment} includeFields={['name', 'html', 'autor', 'status', 'news']} />
  </Box>
);

const CommentTable = () => (
  <Box sx={{ p: 3 }}>
    <DynamicTable resource={resources.Comment} includeHeader={['id', 'name', 'autor', 'status', 'news', 'created_date_time']} />
  </Box>
);

const CommentList = () => (
  <Box sx={{ p: 3 }}>
    <DynamicList resource={resources.Comment} includeFields={['name', 'autor', 'status']} />
  </Box>
);

export { CommentForm, CommentTable, CommentList };
