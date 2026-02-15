import { Box } from "@mui/material";
import DynamicList from "../Dynamics/DynamicList";
import { resources } from "@vhrs/resources";

const answersList = () => (
  <Box sx={{ p: 3 }}>
    <DynamicList resource={resources.answers} includeFields={['name', 'autor', 'status']} />
  </Box>
);

export default answersList;
