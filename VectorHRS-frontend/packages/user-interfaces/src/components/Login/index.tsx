import { Box } from '@mui/material';
import { DynamicForm } from '../Dynamics/DynamicForm';
import { resources } from "@vhrs/resources";

const Login = () => {
  const includeFields = ['email', 'password'];

  console.log(resources.UserResource);

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        padding: 2 
      }}
    >
      <Box 
        sx={{ 
          width: '100%', 
          maxWidth: 400, 
          bgcolor: 'background.paper', 
          padding: 3, 
          borderRadius: 2, 
          boxShadow: 1 
        }}
      >
        <DynamicForm 
          resource={resources.UserResource} 
          includeFields={includeFields} 
          mode="normal" // You can change this to 'two-col' or 'three-col' as needed
        />
      </Box>
    </Box>
  );
};

export default Login;
