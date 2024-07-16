import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
} from "@mui/material";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import type {
  ResourceObject,
  AnnotatedResourceField,
  Action,
} from "@vhrs/resources";
import { SelectChangeEvent } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import { useAuth, UseAuthHook } from "../../context/AuthContext";

interface DynamicFormProps {
  resource?: ResourceObject;
  includeFields: string[];
  mode?: "normal" | "two-col" | "three-col"; // New mode prop
  props?: any;
}

export const DynamicForm = ({
  resource,
  includeFields,
  mode,
  props,
}: DynamicFormProps) => {
  const auth = useAuth();
  const [formData, setFormData] = useState<any>({});

  if (!resource) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (e: SelectChangeEvent) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleQuillChange = (name: string) => (value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent, action?: any) => {
    action?.(formData);
    e.preventDefault();
    return formData;
  };

  const getDisplayComponent = (field: AnnotatedResourceField, value: any) => {
    const display = field.display?.components?.asFormInput;
    if (display) {
      return display(value);
    }
    return null;
  };

  const renderField = (
    field: AnnotatedResourceField,
    fieldName: string,
    value: any
  ) => {
    if (field.enum) {
      return (
        <FormControl fullWidth variant="outlined" key={fieldName}>
          <InputLabel>{field.title || fieldName}</InputLabel>
          <Select
            label={field.title || fieldName}
            id={fieldName}
            name={fieldName}
            value={value || ""}
            onChange={handleSelectChange}
          >
            {field.enum.map((option: string) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      );
    }

    if (field.format === "date-time") {
      return (
        <TextField
          fullWidth
          key={fieldName}
          id={fieldName}
          name={fieldName}
          label={field.title || fieldName}
          type="datetime-local"
          value={value || ""}
          onChange={handleInputChange}
          variant="outlined"
        />
      );
    }

    if (field.type === "integer") {
      return (
        <TextField
          fullWidth
          key={fieldName}
          id={fieldName}
          name={fieldName}
          label={field.title || fieldName}
          type="number"
          value={value || ""}
          onChange={handleInputChange}
          variant="outlined"
        />
      );
    }

    if (field.type === "richtext") {
      return (
        <FormControl fullWidth key={fieldName}>
          <Typography variant="h6">{field.title || fieldName}</Typography>
          <ReactQuill
            value={value || ""}
            onChange={handleQuillChange(fieldName)}
          />
        </FormControl>
      );
    }

    return (
      <TextField
        fullWidth
        key={fieldName}
        id={fieldName}
        name={fieldName}
        label={field.title || fieldName}
        type={field.type || "text"}
        value={value || ""}
        onChange={handleInputChange}
        variant="outlined"
      />
    );
  };
  const renderActions = (
    actions: Action[] = [],
    props: any,
    auth: UseAuthHook
  ) => {
    if (actions.length === 0) {
      // If no actions are provided, create default save and cancel buttons with icons
      return (
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<SaveIcon />}
            onClick={handleSubmit}
          >
            Save
          </Button>
          <Button variant="outlined" color="primary" startIcon={<CancelIcon />}>
            Cancel
          </Button>
        </Box>
      );
    }

    return (
      <Box sx={{ display: "flex", gap: 2 }}>
        {actions
          .filter((action) => {
            // Filter actions based on admission permissions
            if (!action().admissions) return true; // No admission restrictions

            if (action().admissions === "GENERAL") return true;

            if (action().admissions === "DEFAULT_ADMIN" && auth.isLoggedIn) {
              return true;
            }

            return false;
          })
          .map((action) => (
            <Button
              key={action().name}
              variant="contained"
              color={action().color || "primary"}
              className={action().className}
              onClick={(e) =>
                action(formData, { resource, props, auth }).useHandler?.()
              }
              startIcon={action().icon}
              disabled={action().disable}
              hidden={action().hidden}
            >
              {action().title}
            </Button>
          ))}
      </Box>
    );
  };

  const fields: any = resource.fields;

  const renderFields = () => {
    const filteredFields = includeFields.filter((fieldName) => {
      const field = fields[fieldName];
      if (!field.display) return true;
      if (field.display.admissions === "GENERAL") return true;
      if (field.display.admissions === "DEFAULT_ADMIN" && auth.isLoggedIn)
        return true;
      // Add additional logic if needed for UserIds[]
      return false;
    });

    switch (mode) {
      case "two-col":
        return (
          <>
            <Grid item xs={6}>
              {filteredFields
                .slice(0, Math.ceil(filteredFields.length / 2))
                .map((field) => (
                  <Box key={field} marginBottom={2}>
                    {getDisplayComponent(fields[field], formData[field]) ||
                      renderField(fields[field], field, formData[field])}
                  </Box>
                ))}
            </Grid>
            <Grid item xs={6}>
              {filteredFields
                .slice(Math.ceil(filteredFields.length / 2))
                .map((field) => (
                  <Box key={field} marginBottom={2}>
                    {getDisplayComponent(fields[field], formData[field]) ||
                      renderField(fields[field], field, formData[field])}
                  </Box>
                ))}
            </Grid>
          </>
        );
      case "three-col":
        return (
          <>
            <Grid item xs={4}>
              {filteredFields
                .slice(0, Math.ceil(filteredFields.length / 3))
                .map((field) => (
                  <Box key={field} marginBottom={2}>
                    {getDisplayComponent(fields[field], formData[field]) ||
                      renderField(fields[field], field, formData[field])}
                  </Box>
                ))}
            </Grid>
            <Grid item xs={4}>
              {filteredFields
                .slice(
                  Math.ceil(filteredFields.length / 3),
                  Math.ceil((filteredFields.length * 2) / 3)
                )
                .map((field) => (
                  <Box key={field} marginBottom={2}>
                    {getDisplayComponent(fields[field], formData[field]) ||
                      renderField(fields[field], field, formData[field])}
                  </Box>
                ))}
            </Grid>
            <Grid item xs={4}>
              {filteredFields
                .slice(Math.ceil((filteredFields.length * 2) / 3))
                .map((field) => (
                  <Box key={field} marginBottom={2}>
                    {getDisplayComponent(fields[field], formData[field]) ||
                      renderField(fields[field], field, formData[field])}
                  </Box>
                ))}
            </Grid>
          </>
        );
      case "normal":
      default:
        return filteredFields.map((field) => (
          <Grid item xs={12} key={field}>
            <Box marginBottom={2}>
              {getDisplayComponent(fields[field], formData[field]) ||
                renderField(fields[field], field, formData[field])}
            </Box>
          </Grid>
        ));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h5" gutterBottom>
        {resource.name} Form
      </Typography>
      <Grid container spacing={2}>
        {renderFields()}
      </Grid>
      <Box sx={{ pt: 4 }}>
        <Grid container justifyContent="flex-end" spacing={2}>
          {renderActions(resource.actions, props, auth)}
        </Grid>
      </Box>
    </form>
  );
};
