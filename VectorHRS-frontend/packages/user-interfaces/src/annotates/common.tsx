import { ResourceContext } from "@vhrs/resources";
import { TextField, Select, MenuItem, TableCell } from "@mui/material";
import { Edit, CheckCircle, Cancel, Info } from "@mui/icons-material"; // Import MUI icons as needed

export const commonAnnotations = {
  status: {
    display: {
      Components: {
        asComponent: (data: any) => <span>{data}</span>,
        asFormInput: (data: any, ctx: ResourceContext) => (
          <Select
            value={data}
            onChange={(e) => ctx.props.onChange(e.target.value)}
            fullWidth
            displayEmpty
            renderValue={(value) => (
              <span>
                {value === "activated" && <CheckCircle />}
                {value === "deactivated" && <Cancel />}
                {value === "pending" && <Info />}
                {value === "confirmed" && <CheckCircle />}
                {value === "archived" && <Cancel />}
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
          <TableCell>{data}</TableCell>
        ),
        asIcon: (data: any) => {
          switch (data) {
            case "activated":
              return <CheckCircle />;
            case "deactivated":
              return <Cancel />;
            case "pending":
              return <Info />;
            case "confirmed":
              return <CheckCircle />;
            case "archived":
              return <Cancel />;
            default:
              return null;
          }
        },
      },
      admissions: "DEFAULT_ADMIN",
    },
  },
  created_date_time: {
    display: {
      Components: {
        asComponent: (data: any) => <span>{data}</span>,
        asFormInput: (data: any, ctx: ResourceContext) => (
          <TextField
            type="datetime-local"
            value={data}
            onChange={(e) => ctx.props.onChange(e.target.value)}
            fullWidth
          />
        ),
        asTableCell: (data: any) => (
          <TableCell>{data}</TableCell>
        ),
      },
      admissions: "DEFAULT_ADMIN",
    },
  },
  description: {
    display: {
      Components: {
        asComponent: (data: any) => <span>{data}</span>,
        asFormInput: (data: any, ctx: ResourceContext) => (
          <TextField
            multiline
            rows={4}
            value={data}
            onChange={(e) => ctx.props.onChange(e.target.value)}
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
      admissions: "DEFAULT_ADMIN",
    },
  },
};
