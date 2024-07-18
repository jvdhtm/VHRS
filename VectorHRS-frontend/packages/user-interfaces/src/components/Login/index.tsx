import { Box } from "@mui/material";
import { DynamicForm } from "../Dynamics/DynamicForm";
import { resources } from "@vhrs/resources";

const Login = () => {


  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        padding: 2,
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 400,
          bgcolor: "background.paper",
          padding: 3,
          borderRadius: 2,
          boxShadow: 1,
        }}
      >
        <DynamicForm resource={resources.LoginResource} includeFields={['email', 'password']}  />
      </Box>
    </Box>
  );
};

export default Login;
