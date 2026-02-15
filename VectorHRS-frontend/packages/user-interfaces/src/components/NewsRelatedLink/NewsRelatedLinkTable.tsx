import { Box } from "@mui/material";
import DynamicTable from "../Dynamics/DynamicTable";
import { resources } from "@vhrs/resources";

const NewsRelatedLinkTable = () => (
  <Box sx={{ p: 3 }}>
    <DynamicTable resource={resources.NewsRelatedLink} includeHeader={['id', 'news', 'name', 'created_date_time']} />
  </Box>
);

export default NewsRelatedLinkTable;
