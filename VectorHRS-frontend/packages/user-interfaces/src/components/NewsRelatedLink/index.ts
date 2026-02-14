import { Box } from "@mui/material";
import { DynamicForm, DynamicTable, DynamicList } from "../Dynamics";
import { resources } from "@vhrs/resources";

const NewsRelatedLinkForm = () => (
  <Box sx={{ p: 3 }}>
    <DynamicForm resource={resources.NewsRelatedLink} includeFields={['news', 'name']} />
  </Box>
);

const NewsRelatedLinkTable = () => (
  <Box sx={{ p: 3 }}>
    <DynamicTable resource={resources.NewsRelatedLink} includeHeader={['id', 'news', 'name', 'created_date_time']} />
  </Box>
);

const NewsRelatedLinkList = () => (
  <Box sx={{ p: 3 }}>
    <DynamicList resource={resources.NewsRelatedLink} includeFields={['news', 'name']} />
  </Box>
);

export { NewsRelatedLinkForm, NewsRelatedLinkTable, NewsRelatedLinkList };
