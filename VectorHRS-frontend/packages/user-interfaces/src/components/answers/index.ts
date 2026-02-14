import { Box } from "@mui/material";
import { DynamicForm, DynamicTable, DynamicList } from "../Dynamics";
import { resources } from "@vhrs/resources";

const answersForm = () => (
  <Box sx={{ p: 3 }}>
    <DynamicForm resource={resources.answers} includeFields={['name', 'html', 'autor', 'status', 'question']} />
  </Box>
);

const answersTable = () => (
  <Box sx={{ p: 3 }}>
    <DynamicTable resource={resources.answers} includeHeader={['id', 'name', 'autor', 'status', 'question', 'created_date_time']} />
  </Box>
);

const answersList = () => (
  <Box sx={{ p: 3 }}>
    <DynamicList resource={resources.answers} includeFields={['name', 'autor', 'status']} />
  </Box>
);

export { answersForm, answersTable, answersList };
