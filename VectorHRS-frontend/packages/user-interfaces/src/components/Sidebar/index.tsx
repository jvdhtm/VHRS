import React, { useState, useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ListItemIcon from "@mui/material/ListItemIcon";
import { ResourceObject } from "@vhrs/resources"; // Assuming ResourceObject is imported from your resources module

interface SidebarProps {
  resources: ResourceObject[];
}

interface ResourceObjectWithChildren extends ResourceObject {
  children?: ResourceObjectWithChildren[];
}

const Sidebar: React.FC<SidebarProps> = ({ resources }) => {
  const [open, setOpen] = useState<string[]>([]); // State to track open items by their baseUrl
  const [nestedResources, setNestedResources] = useState<
    ResourceObjectWithChildren[]
  >([]);

  const nestResources = (
    resources: ResourceObject[]
  ): ResourceObjectWithChildren[] => {
    const resourceMap: { [key: string]: ResourceObjectWithChildren } = {};

    const resourceFiltered = resources.filter((resource)=>resource.menu?.some((menuItem) => menuItem.partOf === "SIDEBAR"))

    // First pass: map resources by name
    resourceFiltered.forEach((resource) => {
          resourceMap[resource.name] = { ...resource, children: [] };
    });

    // Second pass: assign children to their respective parents
    resourceFiltered.forEach((resource) => {
      resource.menu?.forEach((menuItem) => {
        if (menuItem.parent) {
          const parentResource = resourceMap[menuItem.parent];
          if (parentResource) {
            parentResource.children?.push(resourceMap[resource.name]);
          }
        }
      });
    });

    // Return only top-level resources (those without parents)
    return resourceFiltered
      .filter((resource) => !resource.menu?.some((menuItem) => menuItem.parent))
      .map((resource) => resourceMap[resource.name]);
  };

  useEffect(() => {
    const results = nestResources(resources);
    setNestedResources(results);
  }, [resources]);

  const handleClick = (baseUrl: string) => {
    setOpen((open) =>
      open.includes(baseUrl)
        ? open.filter((item) => item !== baseUrl)
        : [...open, baseUrl]
    );
  };

  // Recursive function to render nested list
  const renderNestedList = (items: ResourceObjectWithChildren[]) => {
    return (
      <List disablePadding>
        {items.map((item) => (
          <div key={item.baseUrl}>
            <ListItem button onClick={() => handleClick(item.baseUrl)}>
              {item.display?.components?.asIcon?.() && (
                <ListItemIcon>{item.display.components.asIcon()}</ListItemIcon>
              )}
              <ListItemText
                primary={item.display?.components?.asTitle?.() || item.name}
              />
            </ListItem>
            <Collapse
              in={open.includes(item.baseUrl)}
              timeout="auto"
              unmountOnExit
            >
              {item.children && renderNestedList(item.children)}
            </Collapse>
          </div>
        ))}
      </List>
    );
  };

  console.log(nestedResources);
  return (
    <List component="nav">
      {nestedResources.map((resource) => {
        return (
          <div key={resource.baseUrl}>
            <ListItem button onClick={() => handleClick(resource.baseUrl)}>
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
            <Collapse
              in={open.includes(resource.baseUrl)}
              timeout="auto"
              unmountOnExit
            >
              {resource.children && renderNestedList(resource.children)}
            </Collapse>
          </div>
        );
      })}
    </List>
  );
};

export default Sidebar;
