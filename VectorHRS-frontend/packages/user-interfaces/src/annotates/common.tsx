import { Action, AnnotatedResourceField, AnnotatedResourceFields, ResourceContext } from "@vhrs/resources";
import { TextField, Select, MenuItem, TableCell, Autocomplete } from "@mui/material";
import { Edit, CheckCircle, Cancel, Info, Link as LinkIcon, Search } from "@mui/icons-material";
import { useRItem } from "../components/hooks/useRItem";

export const commonAnnotations: AnnotatedResourceFields<any> = {
  id: {
    display: {
      components: {
        asTitle: (data: any) => <span>#{data}</span>,
        asTableCell: (data: any) => <TableCell>#{data}</TableCell>,
      },
    },
    sortable: true,
    filterable: true,
  },
  status: {
    display: {
      components: {
        asTitle: (data: any) => <span>{data}</span>,
        asFormInput: (data: any, ctx?: ResourceContext) => (
          <Select
            value={data || ''}
            onChange={(e) => ctx?.props.onChange(e.target.value)}
            fullWidth
            displayEmpty
            renderValue={(value) => (
              <span>
                {value === "activated" && <CheckCircle color="success" />}
                {value === "deactivated" && <Cancel color="error" />}
                {value === "pending" && <Info color="warning" />}
                {value === "confirmed" && <CheckCircle color="info" />}
                {value === "archived" && <Cancel color="disabled" />}
                &nbsp; {value}
              </span>
            )}
          >
            <MenuItem value="activated">Activated</MenuItem>
            <MenuItem value="deactivated">Deactivated</MenuItem>
            <MenuItem value="pending">Pending</MenuItem>
            <MenuItem value="confirmed">Confirmed</MenuItem>
            <MenuItem value="archived">Archived</MenuItem>
          </Select>
        ),
        asTableCell: (data: any) => (
          <TableCell>
            {data === "activated" && <CheckCircle color="success" fontSize="small" />}
            {data === "deactivated" && <Cancel color="error" fontSize="small" />}
            {data === "pending" && <Info color="warning" fontSize="small" />}
            {data === "confirmed" && <CheckCircle color="info" fontSize="small" />}
            {data === "archived" && <Cancel color="disabled" fontSize="small" />}
            &nbsp;{data}
          </TableCell>
        )
      },
    },
    sortable: true,
    filterable: true,
  },
  created_date_time: {
    display: {
      components: {
        asTitle: (data: any) => <span>{data}</span>,
        asFormInput: (data?: any, ctx?: ResourceContext) => (
          <TextField
            type="datetime-local"
            value={data || ''}
            onChange={(e) => ctx?.props.onChange(e.target.value)}
            fullWidth
          />
        ),
        asTableCell: (data: any) => (
          <TableCell>{data}</TableCell>
        ),
      },
    },
    sortable: true,
    filterable: true,
  },
  description: {
    display: {
      components: {
        asTitle: (data: any) => <span>{data}</span>,
        asFormInput: (data: any, ctx?: ResourceContext) => (
          <TextField
            multiline
            rows={4}
            value={data || ''}
            onChange={(e) => ctx?.props.onChange(e.target.value)}
            fullWidth
            InputProps={{
              startAdornment: <Edit />,
            }}
          />
        ),
        asTableCell: (data: any) => (
          <TableCell>{data}</TableCell>
        ),
      },
    },
    filterable: true,
  },
  name: {
    display: {
      components: {
        asTitle: (data: any) => <strong>{data}</strong>,
        asTableCell: (data: any) => <TableCell><strong>{data}</strong></TableCell>,
      },
    },
    sortable: true,
    filterable: true,
  },
};

export const emailAnnotation: AnnotatedResourceFields<any> = {
  email: {
    display: {
      components: {
        asTitle: (data: any) => <a href={`mailto:${data}`}>{data}</a>,
        asFormInput: (data: any, ctx?: ResourceContext) => (
          <TextField
            type="email"
            value={data || ''}
            onChange={(e) => ctx?.props.onChange(e.target.value)}
            fullWidth
          />
        ),
        asTableCell: (data: any) => <TableCell><a href={`mailto:${data}`}>{data}</a></TableCell>,
      },
    },
    sortable: true,
    filterable: true,
  },
};

export const phoneNumberAnnotation: AnnotatedResourceFields<any> = {
  phoneNumber: {
    display: {
      components: {
        asTitle: (data: any) => <a href={`tel:${data}`}>{data}</a>,
        asFormInput: (data: any, ctx?: ResourceContext) => (
          <TextField
            type="tel"
            value={data || ''}
            onChange={(e) => ctx?.props.onChange(e.target.value)}
            fullWidth
          />
        ),
        asTableCell: (data: any) => <TableCell><a href={`tel:${data}`}>{data}</a></TableCell>,
      },
    },
    sortable: true,
    filterable: true,
  },
};

export const relatedFieldAnnotation = (
  resourceName: string,
): AnnotatedResourceField => ({
  display: {
    components: {
      asTitle: (data: any) => (
        <span>
          <LinkIcon fontSize="small" />
          {resourceName} #{data}
        </span>
      ),
      asFormInput: (data: any, ctx?: ResourceContext) => (
        <Autocomplete
          options={[]}
          value={data || null}
          onChange={(_, newValue) => ctx?.props.onChange(newValue)}
          renderInput={(params) => (
            <TextField
              {...params}
              label={`Search ${resourceName}`}
              InputProps={{
                ...params.InputProps,
                startAdornment: <Search fontSize="small" />,
              }}
            />
          )}
        />
      ),
      asTableCell: (data: any) => (
        <TableCell>
          <LinkIcon fontSize="small" />
          {resourceName} #{data}
        </TableCell>
      ),
    },
  },
  sortable: true,
  filterable: true,
});

export const defaultActions: Action[] = [
  (data?: any, ctx?: ResourceContext) => ({
    name: 'save',
    title: `Save ${ctx?.resource.display?.components?.asTitle?.(data, ctx) ?? ''}`,
    useHandler: () => {
      const { saveItem } = useRItem(ctx?.resource);
      saveItem(data.id, data);
    },
    route: () => `${data.id}`,
  }),
  (data?: any, ctx?: ResourceContext) => ({
    name: 'edit',
    title: `Edit ${ctx?.resource.display?.components?.asTitle?.(data, ctx) ?? ''}`,
    route: () => `${data.id}`,
    showInForm: false,
  }),
  (data?: any, ctx?: ResourceContext) => ({
    name: 'delete',
    title: `Delete ${ctx?.resource.display?.components?.asTitle?.(data, ctx) ?? ''}`,
    useHandler: () => {
      const { deleteItem } = useRItem(ctx?.resource);
      deleteItem(data.id);
    },
    route: () => `${data.id}`,
  }),
];
