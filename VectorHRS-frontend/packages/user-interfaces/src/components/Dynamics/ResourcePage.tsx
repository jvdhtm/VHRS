import React, { useState } from 'react';
import { Box, Typography, Tabs, Tab } from '@mui/material';
import { ResourceObject } from '@vhrs/resources';
import DynamicTable from './DynamicTable';
import DynamicList from './DynamicList';

interface ResourcePageProps {
  resource: ResourceObject;
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel: React.FC<TabPanelProps> = ({ children, value, index }) => {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box>{children}</Box>}
    </div>
  );
};

export const ResourcePage: React.FC<ResourcePageProps> = ({ resource }) => {
  const [tabValue, setTabValue] = useState(0);
  const fields = Object.keys(resource.fields);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const title = resource.display?.components?.asTitle?.() || resource.name;

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>{title}</Typography>
      
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={tabValue} onChange={handleTabChange}>
          <Tab label="Table" />
          <Tab label="List" />
        </Tabs>
      </Box>
      
      <TabPanel value={tabValue} index={0}>
        <DynamicTable resource={resource} includeHeader={fields} />
      </TabPanel>
      
      <TabPanel value={tabValue} index={1}>
        <DynamicList resource={resource} includeFields={fields.slice(0, 5)} />
      </TabPanel>
    </Box>
  );
};
