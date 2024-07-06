// theme.ts
import { createTheme } from '@mui/material/styles';

// Define your custom colors, typography, etc.
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Customize your primary color
    },
    secondary: {
      main: '#dc004e', // Customize your secondary color
    },
    error: {
      main: '#f44336', // Customize your error color
    },
    warning: {
      main: '#ff9800', // Customize your warning color
    },
    info: {
      main: '#2196f3', // Customize your info color
    },
    success: {
      main: '#4caf50', // Customize your success color
    },
    background: {
      default: '#f5f5f5', // Customize your default background color
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Customize your font family
    h1: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '1.75rem',
      fontWeight: 500,
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 500,
    },
    h5: {
      fontSize: '1rem',
      fontWeight: 500,
    },
    h6: {
      fontSize: '0.875rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '0.875rem',
    },
    button: {
      textTransform: 'none', // Remove uppercase transformation on buttons
    },
  },
  components: {
    // Customize your components
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px', // Customize button border radius
        },
      },
    },
  },
});

export default theme;
