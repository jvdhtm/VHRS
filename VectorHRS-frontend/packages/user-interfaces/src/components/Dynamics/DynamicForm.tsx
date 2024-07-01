// DynamicForm.tsx

import React, { FC, ReactElement, useState } from 'react';
import { TextField, Button, Grid, Typography, Select, MenuItem, FormControl, InputLabel, Box } from '@mui/material';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import type { ResourceObject, AnnotatedResourceField } from "@vhrs/resources";
import { SelectChangeEvent } from '@mui/material';
import { useAuth } from '../hooks/useAuth';

interface DynamicFormProps {
  resource: ResourceObject;
  includeFields: string[];
  mode?: 'normal' | 'two-col' | 'three-col'; // New mode prop
}

export const DynamicForm: FC<DynamicFormProps> = ({ resource, includeFields, mode }): ReactElement => {


  const { isLoggedIn } = useAuth();

  const [formData, setFormData] = useState<any>({});

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data:', formData); // Replace with actual form submission logic
  };

  const getDisplayComponent = (field: AnnotatedResourceField, value: any) => {
    const display = field.display?.asFormInput;
    if (display) {
      return display(value, { resource, props: {} });
    }
    return null;
  };

  const renderField = (field: AnnotatedResourceField, fieldName: string, value: any) => {
    if (field.enum) {
      return (
        <FormControl fullWidth variant="outlined" key={fieldName}>
          <InputLabel>{field.title || fieldName}</InputLabel>
          <Select
            label={field.title || fieldName}
            id={fieldName}
            name={fieldName}
            value={value || ''}
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
          value={value || ''}
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
          value={value || ''}
          onChange={handleInputChange}
          variant="outlined"
        />
      );
    }

    if (field.type === "string" && field.maxLength && field.maxLength >= 1000) {
      return (
        <FormControl fullWidth key={fieldName}>
          <Typography variant="h6">{field.title || fieldName}</Typography>
          <ReactQuill
            value={value || ''}
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
        value={value || ''}
        onChange={handleInputChange}
        variant="outlined"
      />
    );
  };

  const fields: any = resource.fields;

  const renderFields = () => {
    const filteredFields = includeFields.filter((fieldName) => {
      const field = fields[fieldName];
      if (!field) return false;
      if (field.admissions === 'PUBLIC') return true;
      if (field.admissions === 'GENERAL' && isLoggedIn ) return true;
      // Add additional logic if needed for UserIds[]
      return false;
    });

    switch (mode) {
      case 'two-col':
        return (
          <>
            <Grid item xs={6}>
              {filteredFields.slice(0, Math.ceil(filteredFields.length / 2)).map((field) => (
                <Box key={field} marginBottom={2}>
                  {getDisplayComponent(fields[field], formData[field]) ||
                    renderField(fields[field], field, formData[field])}
                </Box>
              ))}
            </Grid>
            <Grid item xs={6}>
              {filteredFields.slice(Math.ceil(filteredFields.length / 2)).map((field) => (
                <Box key={field} marginBottom={2}>
                  {getDisplayComponent(fields[field], formData[field]) ||
                    renderField(fields[field], field, formData[field])}
                </Box>
              ))}
            </Grid>
          </>
        );
      case 'three-col':
        return (
          <>
            <Grid item xs={4}>
              {filteredFields.slice(0, Math.ceil(filteredFields.length / 3)).map((field) => (
                <Box key={field} marginBottom={2}>
                  {getDisplayComponent(fields[field], formData[field]) ||
                    renderField(fields[field], field, formData[field])}
                </Box>
              ))}
            </Grid>
            <Grid item xs={4}>
              {filteredFields
                .slice(Math.ceil(filteredFields.length / 3), Math.ceil((filteredFields.length * 2) / 3))
                .map((field) => (
                  <Box key={field} marginBottom={2}>
                    {getDisplayComponent(fields[field], formData[field]) ||
                      renderField(fields[field], field, formData[field])}
                  </Box>
                ))}
            </Grid>
            <Grid item xs={4}>
              {filteredFields.slice(Math.ceil((filteredFields.length * 2) / 3)).map((field) => (
                <Box key={field} marginBottom={2}>
                  {getDisplayComponent(fields[field], formData[field]) ||
                    renderField(fields[field], field, formData[field])}
                </Box>
              ))}
            </Grid>
          </>
        );
      case 'normal':
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
      <Typography variant="h5" gutterBottom>{resource.name} Form</Typography>
      <Grid container spacing={2}>
        {renderFields()}
      </Grid>
      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </form>
  );
};
