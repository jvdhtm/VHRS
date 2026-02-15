import { Box } from "@mui/material";
import DynamicForm from "../Dynamics/DynamicForm";
import { resources } from "@vhrs/resources";

const CommentForm = () => (
  <Box sx={{ p: 3 }}>
    <DynamicForm resource={resources.Comment} includeFields={['name', 'html', 'autor', 'status', 'news']} />
  </Box>
);

export default CommentForm;
