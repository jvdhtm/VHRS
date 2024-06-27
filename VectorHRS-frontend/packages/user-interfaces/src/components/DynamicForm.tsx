import React, { useState } from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material';
import { ResourceObject } from '@vhrs/resources'; // Assuming these are imported correctly

interface DynamicFormProps {
  resource: ResourceObject;
  includeFields: string[];
}

const DynamicForm: React.FC<DynamicFormProps> = ({ resource, includeFields }) => {
  const [formData, setFormData] = useState<{ [key: string]: any }>({});

  // Function to handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form data:', formData); // Replace with actual form submission logic
    // Example: You can send formData to an API, etc.
  };

  // Function to generate form fields dynamically based on includeFields
  const generateFormFields = () => {
    return Object.entries(resource.fields)
      .filter(([fieldName]) => includeFields.includes(fieldName))
      .map(([fieldName, field]) => (
        <Grid item xs={12} key={fieldName}>
          <TextField
            fullWidth
            id={fieldName}
            name={fieldName}
            label={field.title || fieldName}
            type={field.type}
            value={formData[fieldName] || ''}
            onChange={handleInputChange}
            variant="outlined"
            // Add more attributes and validations based on field properties
          />
        </Grid>
      ));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h5" gutterBottom>{resource.name} Form</Typography>
      <Grid container spacing={2}>
        {generateFormFields()}
      </Grid>
      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default DynamicForm;
