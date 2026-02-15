import { Box } from "@mui/material";
import DynamicList from "../Dynamics/DynamicList";
import { resources } from "@vhrs/resources";

const QuestionsRelatedLinkList = () => (
  <Box sx={{ p: 3 }}>
    <DynamicList resource={resources.QuestionsRelatedLink} includeFields={['question', 'name']} />
  </Box>
);

export default QuestionsRelatedLinkList;
