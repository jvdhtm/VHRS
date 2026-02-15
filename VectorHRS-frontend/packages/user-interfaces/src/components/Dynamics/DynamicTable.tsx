import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useRItem } from "../hooks/useRItem";
import type { ResourceObject, AnnotatedResourceField, Action } from "@vhrs/resources";
import { Box, TableCell, Drawer, Tabs, Tab, IconButton, Typography } from "@mui/material";
import { Edit, Delete, Close } from "@mui/icons-material";
import { useAuth } from "../../context/AuthContext";
import DynamicList from "./DynamicList";
import DynamicForm from "./DynamicForm";

interface DynamicTableProps {
  resource: ResourceObject;
  includeHeader: string[];
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

const DynamicTable: React.FC<DynamicTableProps> = ({
  resource,
  includeHeader,
}) => {
  const auth = useAuth();
  const { data, isLoading, error, fetchItems }: any = useRItem(resource);
  
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>(null);
  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  const columnHelper = createColumnHelper<any>();

  const getCellComponent = useCallback(
    (field: AnnotatedResourceField, value: any) => {
      const display = field.display?.components?.asTableCell;
      return display ? display(value, { resource, props: {}, auth }) : value;
    },
    [resource, auth]
  );

  const resourceActions = useMemo(() => {
    return resource.actions || [];
  }, [resource.actions]);

  const handleEdit = useCallback((rowData: any) => {
    setSelectedRow(rowData);
    setDrawerOpen(true);
  }, []);

  const handleDelete = useCallback(async (action: Action, rowData: any) => {
    const actionData = action(rowData, { resource, props: {}, auth });
    if (actionData.useHandler) {
      await actionData.useHandler();
      fetchItems();
    }
  }, [resource, auth, fetchItems]);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
    setSelectedRow(null);
    setTabValue(0);
  };

  const resourceFields = Object.keys(resource.fields);

  const columns = useMemo(() => {
    const resourceFieldsObj: any = resource.fields;
    const cols = includeHeader.map((field) => {
      return columnHelper.accessor(field, {
        id: field,
        header: resourceFieldsObj[field]?.title || field,
        cell: (info) => getCellComponent(resourceFieldsObj[field], info.getValue()),
      });
    });

    if (resourceActions.length > 0) {
      cols.push(
        columnHelper.display({
          id: 'actions',
          header: 'Actions',
          cell: ({ row }) => (
            <TableCell>
              {resourceActions.map((action) => {
                const actionData = action(row.original, { resource, props: {}, auth });
                return (
                  <IconButton
                    key={actionData.name}
                    size="small"
                    onClick={() => actionData.name === 'edit' ? handleEdit(row.original) : handleDelete(action, row.original)}
                  >
                    {actionData.name === 'edit' ? <Edit /> : <Delete />}
                  </IconButton>
                );
              })}
            </TableCell>
          );
        })
      );
    }

    return cols;
  }, [columnHelper, getCellComponent, includeHeader, resource.fields, resourceActions, resource, auth, handleEdit, handleDelete]);

  const table = useReactTable({
    data: data || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (isLoading) return <Box p={2}>Loading...</Box>;
  if (error) return <Box p={2}>Error: {error.message}</Box>;

  return (
    <Box sx={{ p: 2, overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} colSpan={header.colSpan} style={{ textAlign: 'left', padding: '8px', borderBottom: '2px solid #ddd' }}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={closeDrawer}
        sx={{
          '& .MuiDrawer-paper': {
            width: { xs: '100%', sm: '50%' },
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6">
              {resource.display?.components?.asTitle?.() || resource.name}
            </Typography>
            <IconButton onClick={closeDrawer}>
              <Close />
            </IconButton>
          </Box>

          <Tabs value={tabValue} onChange={handleTabChange}>
            <Tab label="List" />
            <Tab label="Form" />
          </Tabs>

          <TabPanel value={tabValue} index={0}>
            <DynamicList resource={resource} includeFields={resourceFields.slice(0, 5)} />
          </TabPanel>
          
          <TabPanel value={tabValue} index={1}>
            <DynamicForm 
              resource={resource} 
              includeFields={resourceFields} 
              initialData={selectedRow}
            />
          </TabPanel>
        </Box>
      </Drawer>
    </Box>
  );
};

export default DynamicTable;
