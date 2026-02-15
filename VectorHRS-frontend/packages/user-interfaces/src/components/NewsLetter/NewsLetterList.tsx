import { Box } from "@mui/material";
import DynamicList from "../Dynamics/DynamicList";
import { resources } from "@vhrs/resources";

const NewsLetterList = () => (
  <Box sx={{ p: 3 }}>
    <DynamicList resource={resources.NewsLetter} includeFields={['name', 'description', 'status']} />
  </Box>
);

export default NewsLetterList;
