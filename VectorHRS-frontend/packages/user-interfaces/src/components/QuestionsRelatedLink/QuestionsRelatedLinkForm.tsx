import { Box } from "@mui/material";
import DynamicForm from "../Dynamics/DynamicForm";
import { resources } from "@vhrs/resources";

const QuestionsRelatedLinkForm = () => (
  <Box sx={{ p: 3 }}>
    <DynamicForm resource={resources.QuestionsRelatedLink} includeFields={['question', 'name']} />
  </Box>
);

export default QuestionsRelatedLinkForm;
