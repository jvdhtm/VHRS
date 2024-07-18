import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme'; // Adjust the import path as necessary
import './annotates/';
import Login from './components/Login';
import User from './components/User';
import { AuthProvider } from './context/AuthContext';
import { DataCacheProvider } from './context/DataCache';
import PrivateRoute from './components/PrivateRoute';
import People from './components/People';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DataCacheProvider>
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<PrivateRoute />}>
                <Route path="dashboard" element={<People />} />
                <Route path="user" element={<User />} />
              </Route>
              <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </DataCacheProvider>
    </ThemeProvider>
  );
};

export default App;
