import { Box } from "@mui/material";
import { DynamicForm, DynamicTable, DynamicList } from "../Dynamics";
import { resources } from "@vhrs/resources";

const NewsLetterForm = () => (
  <Box sx={{ p: 3 }}>
    <DynamicForm resource={resources.NewsLetter} includeFields={['name', 'description', 'html', 'autor', 'status']} />
  </Box>
);

const NewsLetterTable = () => (
  <Box sx={{ p: 3 }}>
    <DynamicTable resource={resources.NewsLetter} includeHeader={['id', 'name', 'description', 'autor', 'status', 'created_date_time']} />
  </Box>
);

const NewsLetterList = () => (
  <Box sx={{ p: 3 }}>
    <DynamicList resource={resources.NewsLetter} includeFields={['name', 'description', 'status']} />
  </Box>
);

export { NewsLetterForm, NewsLetterTable, NewsLetterList };
