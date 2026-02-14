import { Box } from "@mui/material";
import { DynamicForm, DynamicTable, DynamicList } from "../Dynamics";
import { resources } from "@vhrs/resources";

const StaffStageForm = () => (
  <Box sx={{ p: 3 }}>
    <DynamicForm resource={resources.StaffStage} includeFields={['name', 'description', 'step', 'x', 'status']} />
  </Box>
);

const StaffStageTable = () => (
  <Box sx={{ p: 3 }}>
    <DynamicTable resource={resources.StaffStage} includeHeader={['id', 'name', 'description', 'step', 'x', 'status', 'created_date_time']} />
  </Box>
);

const StaffStageList = () => (
  <Box sx={{ p: 3 }}>
    <DynamicList resource={resources.StaffStage} includeFields={['name', 'step', 'status']} />
  </Box>
);

export { StaffStageForm, StaffStageTable, StaffStageList };
