import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Typography } from '@mui/material';
import theme from '@vhrs/user-interfaces/theme';
import '@vhrs/user-interfaces/annotates';

// Auth & Layout
import Login from '@vhrs/user-interfaces/components/Login';
import { AuthProvider } from '@vhrs/user-interfaces/context/AuthContext';
import { DataCacheProvider } from '@vhrs/user-interfaces/context/DataCache';
import PrivateRoute from '@vhrs/user-interfaces/components/PrivateRoute';
import People from '@vhrs/user-interfaces/components/People';

// Dynamic Components
import { ResourcePage } from '@vhrs/user-interfaces/components/Dynamics';
import { resources } from '@vhrs/resources';

// Generic Resource Route Component
const ResourceRoute: React.FC<{ resourceKey: keyof typeof resources }> = ({ resourceKey }) => {
  const resource = resources[resourceKey];
  if (!resource) return <Box p={3}><Typography>Resource not found</Typography></Box>;
  return <ResourcePage resource={resource} />;
};

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
                
                {/* People */}
                <Route path="person" element={<ResourceRoute resourceKey="Person" />} />
                <Route path="address" element={<ResourceRoute resourceKey="Address" />} />
                <Route path="phone" element={<ResourceRoute resourceKey="Phone" />} />
                <Route path="personstage" element={<ResourceRoute resourceKey="PersonStage" />} />
                <Route path="personlog" element={<ResourceRoute resourceKey="PersonLog" />} />
                <Route path="expertise" element={<ResourceRoute resourceKey="Expertise" />} />
                <Route path="expertiseprofile" element={<ResourceRoute resourceKey="ExpertiseProfile" />} />
                
                {/* Staff */}
                <Route path="staff" element={<ResourceRoute resourceKey="Staff" />} />
                <Route path="department" element={<ResourceRoute resourceKey="Department" />} />
                <Route path="function" element={<ResourceRoute resourceKey="Function" />} />
                <Route path="condition" element={<ResourceRoute resourceKey="Condition" />} />
                <Route path="staffstage" element={<ResourceRoute resourceKey="StaffStage" />} />
                <Route path="stafflog" element={<ResourceRoute resourceKey="StaffLog" />} />
                <Route path="staffcomment" element={<ResourceRoute resourceKey="StaffComment" />} />
                <Route path="stafffunctions" element={<ResourceRoute resourceKey="StaffFunctions" />} />
                
                {/* Identity */}
                <Route path="user" element={<ResourceRoute resourceKey="User" />} />
                <Route path="role" element={<ResourceRoute resourceKey="Role" />} />
                <Route path="app" element={<ResourceRoute resourceKey="App" />} />
                
                {/* News */}
                <Route path="newsletter" element={<ResourceRoute resourceKey="NewsLetter" />} />
                <Route path="comment" element={<ResourceRoute resourceKey="Comment" />} />
                <Route path="newsrelatedlink" element={<ResourceRoute resourceKey="NewsRelatedLink" />} />
                
                {/* Questions */}
                <Route path="question" element={<ResourceRoute resourceKey="Question" />} />
                <Route path="answers" element={<ResourceRoute resourceKey="answers" />} />
                <Route path="questionsrelatedlink" element={<ResourceRoute resourceKey="QuestionsRelatedLink" />} />
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
