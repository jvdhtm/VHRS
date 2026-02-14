import { Box } from "@mui/material";
import { DynamicForm, DynamicTable, DynamicList } from "../Dynamics";
import { resources } from "@vhrs/resources";

const FunctionForm = () => (
  <Box sx={{ p: 3 }}>
    <DynamicForm resource={resources.Function} includeFields={['name', 'description', 'shape', 'status']} />
  </Box>
);

const FunctionTable = () => (
  <Box sx={{ p: 3 }}>
    <DynamicTable resource={resources.Function} includeHeader={['id', 'name', 'description', 'shape', 'status', 'created_date_time']} />
  </Box>
);

const FunctionList = () => (
  <Box sx={{ p: 3 }}>
    <DynamicList resource={resources.Function} includeFields={['name', 'shape', 'status']} />
  </Box>
);

export { FunctionForm, FunctionTable, FunctionList };
