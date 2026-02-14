import React, { useEffect } from "react";
import { useRItem } from "../hooks/useRItem";
import type { ResourceObject, AnnotatedResourceField } from "@vhrs/resources";
import { Box, List, ListItem, ListItemText, ListItemIcon, Collapse } from "@mui/material";
import { useAuth } from "../../context/AuthContext";

interface DynamicListProps {
  resource: ResourceObject;
  includeFields?: string[];
}

const DynamicList: React.FC<DynamicListProps> = ({
  resource,
  includeFields,
}) => {
  const auth = useAuth();
  const { data, isLoading, error, fetchItems }: any = useRItem(resource);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  const getListItemComponent = (
    field: AnnotatedResourceField,
    value: any
  ) => {
    const display = field.display?.components?.asListItem;
    return display ? display(value, { resource, props: {}, auth }) : value;
  };

  const getTitleComponent = () => {
    return resource.display?.components?.asTitle?.() || resource.name;
  };

  if (isLoading) return <Box p={2}>Loading...</Box>;
  if (error) return <Box p={2}>Error: {error.message}</Box>;

  const fields = resource.fields;
  const displayFields = includeFields || Object.keys(fields);

  return (
    <Box sx={{ p: 2 }}>
      <List>
        {data?.map((item: any, index: number) => (
          <ListItem key={item.id || index}>
            <ListItemText
              primary={
                <Box>
                  {displayFields.map((field) => {
                    const fieldDef = fields[field];
                    if (!fieldDef) return null;
                    return (
                      <Box key={field} component="span" sx={{ mr: 2 }}>
                        {getListItemComponent(fieldDef, item[field])}
                      </Box>
                    );
                  })}
                </Box>
              }
              secondary={getTitleComponent()}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default DynamicList;
