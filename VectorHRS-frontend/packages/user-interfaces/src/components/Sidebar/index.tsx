import React, { useState, useMemo } from "react";
import { 
  List, 
  ListItem, 
  ListItemText, 
  ListItemIcon, 
  Collapse, 
  Box,
  Divider,
  Typography
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { ResourceObject, groupResourcesByModule } from "@vhrs/resources";
import { useNavigate } from "react-router-dom";

interface SidebarProps {
  resources: ResourceObject[];
}

const Sidebar: React.FC<SidebarProps> = ({ resources }) => {
  const navigate = useNavigate();
  const [openGroups, setOpenGroups] = useState<{ [key: string]: boolean }>({});

  const groupedResources = useMemo(() => {
    return groupResourcesByModule(resources);
  }, [resources]);

  const handleGroupClick = (groupName: string) => {
    setOpenGroups(prev => ({
      ...prev,
      [groupName]: !prev[groupName]
    }));
  };

  const handleResourceClick = (resource: ResourceObject) => {
    const path = `/${resource.name.toLowerCase()}`;
    navigate(path);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {Object.entries(groupedResources).map(([groupName, groupResources]) => (
        <div key={groupName}>
          <ListItem button onClick={() => handleGroupClick(groupName)}>
            {openGroups[groupName] ? <ExpandLess /> : <ExpandMore />}
            <Typography variant="subtitle2" sx={{ ml: 1, fontWeight: 'bold' }}>
              {groupName}
            </Typography>
          </ListItem>
          <Collapse in={openGroups[groupName]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {groupResources.map((resource, index) => (
                <ListItem 
                  button 
                  key={resource.name + index} 
                  onClick={() => handleResourceClick(resource)}
                  sx={{ pl: 4 }}
                >
                  {resource.display?.components?.asIcon?.() && (
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      {resource.display.components.asIcon()}
                    </ListItemIcon>
                  )}
                  <ListItemText
                    primary={
                      resource.display?.components?.asTitle?.() || resource.name
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Collapse>
          <Divider />
        </div>
      ))}
    </Box>
  );
};

export default Sidebar;
