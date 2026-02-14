import { Box } from "@mui/material";
import { DynamicForm, DynamicTable, DynamicList } from "../Dynamics";
import { resources } from "@vhrs/resources";

const PersonStageForm = () => (
  <Box sx={{ p: 3 }}>
    <DynamicForm resource={resources.PersonStage} includeFields={['name', 'description', 'step', 'x', 'status']} />
  </Box>
);

const PersonStageTable = () => (
  <Box sx={{ p: 3 }}>
    <DynamicTable resource={resources.PersonStage} includeHeader={['id', 'name', 'description', 'step', 'x', 'status', 'created_date_time']} />
  </Box>
);

const PersonStageList = () => (
  <Box sx={{ p: 3 }}>
    <DynamicList resource={resources.PersonStage} includeFields={['name', 'step', 'status']} />
  </Box>
);

export { PersonStageForm, PersonStageTable, PersonStageList };
