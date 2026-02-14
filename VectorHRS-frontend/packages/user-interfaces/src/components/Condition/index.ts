import { Box } from "@mui/material";
import { DynamicForm, DynamicTable, DynamicList } from "../Dynamics";
import { resources } from "@vhrs/resources";

const ConditionForm = () => (
  <Box sx={{ p: 3 }}>
    <DynamicForm resource={resources.Condition} includeFields={['severity', 'status']} />
  </Box>
);

const ConditionTable = () => (
  <Box sx={{ p: 3 }}>
    <DynamicTable resource={resources.Condition} includeHeader={['id', 'severity', 'status', 'created_date_time']} />
  </Box>
);

const ConditionList = () => (
  <Box sx={{ p: 3 }}>
    <DynamicList resource={resources.Condition} includeFields={['severity', 'status']} />
  </Box>
);

export { ConditionForm, ConditionTable, ConditionList };
