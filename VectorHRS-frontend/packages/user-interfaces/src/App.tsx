import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme'; // Adjust the import path as necessary
import './annotates/';
import Login from './components/Login';
import { AuthProvider } from './context/AuthContext';
import { DataCacheProvider } from './context/DataCache';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DataCacheProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
      </DataCacheProvider>
    </ThemeProvider>
  );
};

export default App;
