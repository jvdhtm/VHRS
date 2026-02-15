import { Box } from "@mui/material";
import DynamicList from "../Dynamics/DynamicList";
import { resources } from "@vhrs/resources";

const QuestionList = () => (
  <Box sx={{ p: 3 }}>
    <DynamicList resource={resources.Question} includeFields={['name', 'description', 'status']} />
  </Box>
);

export default QuestionList;
