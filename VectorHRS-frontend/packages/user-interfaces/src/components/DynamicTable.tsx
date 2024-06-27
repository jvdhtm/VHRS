import React, { useEffect, useMemo } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useRItem } from "../context/RItemContext";
import { ResourceObject } from "@vhrs/resources"; // Adjust path as needed

interface DynamicTableProps {
  resource: ResourceObject;
  includeHeader: string[];
}

const DynamicTable: React.FC<DynamicTableProps> = ({
  resource,
  includeHeader,
}) => {
  const { data, isLoading, error, fetchItems }: any = useRItem(resource); // Adjust useRItem type as per your context

  useEffect(() => {
    fetchItems(); // Fetch items when component mounts
  }, [fetchItems]);

  const columnHelper = createColumnHelper<any>(); // Adjust type as per your data structure

  // Define columns based on includeHeader
  const columns = useMemo(() => {
    return includeHeader.map((field) => {
      const fields: any = resource.fields;
      return columnHelper.accessor(field, {
        header: fields[field].title || field,
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      });
    });
  }, [columnHelper, includeHeader, resource]);

  // Initialize react-table hooks
  const table = useReactTable({
    data: data || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="p-2">
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} colSpan={header.colSpan}>
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
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th key={header.id} colSpan={header.colSpan}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </div>
  );
};

export default DynamicTable;
