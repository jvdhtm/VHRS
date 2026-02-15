import { Box } from "@mui/material";
import DynamicTable from "../Dynamics/DynamicTable";
import { resources } from "@vhrs/resources";

const NewsLetterTable = () => (
  <Box sx={{ p: 3 }}>
    <DynamicTable resource={resources.NewsLetter} includeHeader={['id', 'name', 'description', 'autor', 'status', 'created_date_time']} />
  </Box>
);

export default NewsLetterTable;
