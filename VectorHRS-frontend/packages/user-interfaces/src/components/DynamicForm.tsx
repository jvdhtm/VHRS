import React, { useState } from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material';
import { ResourceObject, AnnotatedResourceField } from '@vhrs/resources'; // Adjust imports as per your project

interface DynamicFormProps {
  resource: ResourceObject;
}

const DynamicForm: React.FC<DynamicFormProps> = ({ resource }) => {
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

  // Function to generate form fields dynamically based on display configuration
  const generateFormFields = () => {
    return Object.entries(resource.fields).map(([fieldName, field]) => {
      const { title, type } = field as AnnotatedResourceField; // Cast to ResourceField for type safety
      const ComponentToRender = determineComponent(field);

      return (
        <Grid item xs={12} key={fieldName}>
          {ComponentToRender && (
            <ComponentToRender
              id={fieldName}
              name={fieldName}
              label={title || fieldName}
              type={type === 'string' ? 'text' : type} // Adjust type if necessary
              value={formData[fieldName] || ''}
              onChange={handleInputChange}
              variant="outlined"
              // Add more attributes and validations based on field properties
            />
          )}
        </Grid>
      );
    });
  };

  // Function to determine which component to render based on display configuration
  const determineComponent = (field: AnnotatedResourceField): React.ElementType<any> | null => {
    const {asFormInput } = field.display || {};
      if (asFormInput) {
      // Render custom form input element
      return asFormInput as React.ElementType<any>;
    } else {
      // Render default TextField for standard input
      return TextField;
    }
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
