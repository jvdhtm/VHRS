import { Box } from "@mui/material";
import DynamicTable from "../Dynamics/DynamicTable";
import { resources } from "@vhrs/resources";

const QuestionsRelatedLinkTable = () => (
  <Box sx={{ p: 3 }}>
    <DynamicTable resource={resources.QuestionsRelatedLink} includeHeader={['id', 'question', 'name', 'created_date_time']} />
  </Box>
);

export default QuestionsRelatedLinkTable;
