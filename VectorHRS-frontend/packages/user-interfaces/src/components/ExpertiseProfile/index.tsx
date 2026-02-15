import { Box } from "@mui/material";
import DynamicForm from "../Dynamics/DynamicForm";
import DynamicTable from "../Dynamics/DynamicTable";
import DynamicList from "../Dynamics/DynamicList";
import { resources } from "@vhrs/resources";

const ExpertiseProfileForm = () => (
  <Box sx={{ p: 3 }}>
    <DynamicForm resource={resources.ExpertiseProfile} includeFields={['name', 'description', 'person', 'expertise', 'status']} />
  </Box>
);

const ExpertiseProfileTable = () => (
  <Box sx={{ p: 3 }}>
    <DynamicTable resource={resources.ExpertiseProfile} includeHeader={['id', 'name', 'description', 'person', 'expertise', 'status', 'created_date_time']} />
  </Box>
);

const ExpertiseProfileList = () => (
  <Box sx={{ p: 3 }}>
    <DynamicList resource={resources.ExpertiseProfile} includeFields={['name', 'person', 'status']} />
  </Box>
);

export { ExpertiseProfileForm, ExpertiseProfileTable, ExpertiseProfileList };
