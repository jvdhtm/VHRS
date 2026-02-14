import { Box } from "@mui/material";
import { DynamicForm, DynamicTable, DynamicList } from "../Dynamics";
import { resources } from "@vhrs/resources";

const ExpertiseForm = () => (
  <Box sx={{ p: 3 }}>
    <DynamicForm resource={resources.Expertise} includeFields={['name', 'description', 'parentId', 'status']} />
  </Box>
);

const ExpertiseTable = () => (
  <Box sx={{ p: 3 }}>
    <DynamicTable resource={resources.Expertise} includeHeader={['id', 'name', 'description', 'parentId', 'status', 'created_date_time']} />
  </Box>
);

const ExpertiseList = () => (
  <Box sx={{ p: 3 }}>
    <DynamicList resource={resources.Expertise} includeFields={['name', 'description', 'status']} />
  </Box>
);

export { ExpertiseForm, ExpertiseTable, ExpertiseList };
