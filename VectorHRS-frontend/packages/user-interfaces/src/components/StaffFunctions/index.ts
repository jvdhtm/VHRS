import { Box } from "@mui/material";
import { DynamicForm, DynamicTable, DynamicList } from "../Dynamics";
import { resources } from "@vhrs/resources";

const StaffFunctionsForm = () => (
  <Box sx={{ p: 3 }}>
    <DynamicForm resource={resources.StaffFunctions} includeFields={['function', 'staff', 'status']} />
  </Box>
);

const StaffFunctionsTable = () => (
  <Box sx={{ p: 3 }}>
    <DynamicTable resource={resources.StaffFunctions} includeHeader={['id', 'function', 'staff', 'status', 'created_date_time']} />
  </Box>
);

const StaffFunctionsList = () => (
  <Box sx={{ p: 3 }}>
    <DynamicList resource={resources.StaffFunctions} includeFields={['function', 'staff', 'status']} />
  </Box>
);

export { StaffFunctionsForm, StaffFunctionsTable, StaffFunctionsList };
