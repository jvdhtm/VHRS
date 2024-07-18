import { createTheme } from '@mui/material/styles';

// Define your custom colors, typography, etc.
const theme = createTheme({
  palette: {
    primary: {
      main: '#1A73E8', // Professional blue
    },
    secondary: {
      main: '#28A745', // Trustworthy green
    },
    error: {
      main: '#DC3545', // Standard error color
    },
    warning: {
      main: '#FFC107', // Standard warning color
    },
    info: {
      main: '#17A2B8', // Standard info color
    },
    success: {
      main: '#28A745', // Standard success color
    },
    background: {
      default: '#F8F9FA', // Light, clean background
      paper: '#FFFFFF', // Paper background
    },
    text: {
      primary: '#212529', // Dark text for readability
      secondary: '#6C757D', // Muted text for secondary information
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Modern and clean font
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700, // Bolder for main headings
      color: '#212529',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      color: '#212529',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
      color: '#212529',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
      color: '#212529',
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
      color: '#212529',
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
      color: '#212529',
    },
    body1: {
      fontSize: '1rem',
      color: '#212529',
    },
    body2: {
      fontSize: '0.875rem',
      color: '#6C757D',
    },
    button: {
      textTransform: 'none', // Remove uppercase transformation on buttons
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px', // Customize button border radius
          padding: '10px 20px', // Adjust padding for better appearance
        },
        containedPrimary: {
          backgroundColor: '#1A73E8',
          '&:hover': {
            backgroundColor: '#155BB5',
          },
        },
        containedSecondary: {
          backgroundColor: '#28A745',
          '&:hover': {
            backgroundColor: '#1F8F36',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF', // Light background for AppBar
          color: '#212529', // Dark text for contrast
          boxShadow: 'none', // Remove default shadow
          borderBottom: '1px solid #E0E0E0', // Subtle border for separation
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#F8F9FA', // Light background for the drawer
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: '#E3F2FD', // Light blue background for selected items
            '&:hover': {
              backgroundColor: '#BBDEFB', // Slightly darker on hover
            },
          },
        },
      },
    },
  },
});

export default theme;
