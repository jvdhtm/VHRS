import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import { ResourceObject } from "@vhrs/resources";

interface SidebarProps {
  resources: ResourceObject[];
}

const Sidebar: React.FC<SidebarProps> = ({ resources }) => {
  return (
    <List component="nav">
      {resources.map((resource, index) => {
        return (
          <ListItem button key={resource.name + index}>
            {resource.display?.components?.asIcon?.() && (
              <ListItemIcon>
                {resource.display.components.asIcon()}
              </ListItemIcon>
            )}
            <ListItemText
              primary={
                resource.display?.components?.asTitle?.() || resource.name
              }
            />
          </ListItem>
        );
      })}
    </List>
  );
};

export default Sidebar;
