import { Box } from "@mui/material";
import DynamicList from "../Dynamics/DynamicList";
import { resources } from "@vhrs/resources";

const NewsRelatedLinkList = () => (
  <Box sx={{ p: 3 }}>
    <DynamicList resource={resources.NewsRelatedLink} includeFields={['news', 'name']} />
  </Box>
);

export default NewsRelatedLinkList;
