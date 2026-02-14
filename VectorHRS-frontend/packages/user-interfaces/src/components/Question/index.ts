import { Box } from "@mui/material";
import { DynamicForm, DynamicTable, DynamicList } from "../Dynamics";
import { resources } from "@vhrs/resources";

const QuestionForm = () => (
  <Box sx={{ p: 3 }}>
    <DynamicForm resource={resources.Question} includeFields={['name', 'html', 'description', 'autor', 'status']} />
  </Box>
);

const QuestionTable = () => (
  <Box sx={{ p: 3 }}>
    <DynamicTable resource={resources.Question} includeHeader={['id', 'name', 'description', 'autor', 'status', 'created_date_time']} />
  </Box>
);

const QuestionList = () => (
  <Box sx={{ p: 3 }}>
    <DynamicList resource={resources.Question} includeFields={['name', 'description', 'status']} />
  </Box>
);

export { QuestionForm, QuestionTable, QuestionList };
