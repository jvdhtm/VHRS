// DynamicForm.tsx

import React, { useState } from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material';
import type { ResourceObject, AnnotatedResourceField } from "@vhrs/resources";

interface DynamicFormProps {
  resource: ResourceObject;
  includeFields: string[];
}

const DynamicForm: React.FC<DynamicFormProps> = ({ resource, includeFields }) => {
  const [formData, setFormData] = useState<any>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data:', formData); // Replace with actual form submission logic
  };

  const getDisplayComponent = (field: AnnotatedResourceField, value: any) => {
    const display = field.display?.asFormInput
    if (display) {
      return display(value,{resource, props:{} });
    }
    return null;
  };
  const fields: any = resource.fields;
  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h5" gutterBottom>{resource.name} Form</Typography>
      <Grid container spacing={2}>
        {includeFields.map((field) => (
          <Grid item xs={12} key={field}>
            {getDisplayComponent(fields[field], formData[field]) || (
              <TextField
                fullWidth
                id={field}
                name={field}
                label={fields[field].title || field}
                type={fields[field].type}
                value={formData[field] || ''}
                onChange={handleInputChange}
                variant="outlined"
              />
            )}
          </Grid>
        ))}
      </Grid>
      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default DynamicForm;
