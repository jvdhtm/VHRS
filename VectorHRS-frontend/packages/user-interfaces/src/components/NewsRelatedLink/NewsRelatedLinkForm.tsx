import { Box } from "@mui/material";
import DynamicForm from "../Dynamics/DynamicForm";
import { resources } from "@vhrs/resources";

const NewsRelatedLinkForm = () => (
  <Box sx={{ p: 3 }}>
    <DynamicForm resource={resources.NewsRelatedLink} includeFields={['news', 'name']} />
  </Box>
);

export default NewsRelatedLinkForm;
