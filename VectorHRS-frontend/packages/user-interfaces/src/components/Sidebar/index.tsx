import React, { useState, useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ListItemIcon from "@mui/material/ListItemIcon";
import { ResourceObject } from "@vhrs/resources"; // Assuming ResourceObject is imported from your resources module
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const nestResources = (
    resources: ResourceObject[]
  ): ResourceObjectWithChildren[] => {
    const resourceMap: { [key: string]: ResourceObjectWithChildren } = {};

    const resourceFiltered = resources.filter((resource) =>
      resource.menu?.some((menuItem) => menuItem.partOf === "SIDEBAR")
    );

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

  const handleClick = (resource: ResourceObjectWithChildren) => {
    setOpen((open) =>
      open.includes(resource.name)
        ? open.filter((item) => item !== resource.name)
        : [...open, resource.name]
    );
    const inMenu = resource.menu?.find((menuItem) => menuItem.partOf === "SIDEBAR");
    if (inMenu?.to) {
      navigate(inMenu.to); // Navigate to the specified path
    }
  };

  // Recursive function to render nested list
  const renderNestedList = (items: ResourceObjectWithChildren[]) => {
    return (
      <List disablePadding>
        {items.map((item, index) => (
          <div key={item.name + index}>
            <ListItem button onClick={() => handleClick(item)}>
              {item.display?.components?.asIcon?.() && (
                <ListItemIcon>{item.display.components.asIcon()}</ListItemIcon>
              )}
              <ListItemText
                primary={item.display?.components?.asTitle?.() || item.name}
              />
            </ListItem>
            <Collapse
              in={open.includes(item.name)}
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
      {nestedResources.map((resource, index) => {
        return (
          <div key={resource.name + index}>
            <ListItem button onClick={() => handleClick(resource)}>
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
              in={open.includes(resource.name)}
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
