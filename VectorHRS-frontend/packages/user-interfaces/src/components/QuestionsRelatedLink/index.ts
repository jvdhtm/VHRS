import { Box } from "@mui/material";
import { DynamicForm, DynamicTable, DynamicList } from "../Dynamics";
import { resources } from "@vhrs/resources";

const QuestionsRelatedLinkForm = () => (
  <Box sx={{ p: 3 }}>
    <DynamicForm resource={resources.QuestionsRelatedLink} includeFields={['question', 'name']} />
  </Box>
);

const QuestionsRelatedLinkTable = () => (
  <Box sx={{ p: 3 }}>
    <DynamicTable resource={resources.QuestionsRelatedLink} includeHeader={['id', 'question', 'name', 'created_date_time']} />
  </Box>
);

const QuestionsRelatedLinkList = () => (
  <Box sx={{ p: 3 }}>
    <DynamicList resource={resources.QuestionsRelatedLink} includeFields={['question', 'name']} />
  </Box>
);

export { QuestionsRelatedLinkForm, QuestionsRelatedLinkTable, QuestionsRelatedLinkList };
