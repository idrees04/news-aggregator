import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Box, MenuItem } from '@mui/material';

const ProfileSettingsSchema = Yup.object().shape({
  sources: Yup.string().required('Sources are required'),
  categories: Yup.string().required('Categories are required'),
  authors: Yup.string().required('Authors are required'),
});

const sourcesOptions = ['CNN', 'BBC', 'The New York Times']; // Add your sources options
const categoriesOptions = ['Business', 'Technology', 'Health']; // Add your categories options
const authorsOptions = ['John Doe', 'Jane Smith', 'Michael Johnson']; // Add your authors options

function ProfileSettings() {
  const handleSubmit = (values) => {
    // Save values to browser storage or send to backend
    localStorage.setItem('preferences', JSON.stringify(values));
    // Optionally, display a confirmation message
    alert('Preferences saved successfully!');
  };

  return (
    <Formik
      initialValues={{
        sources: '',
        categories: '',
        authors: '',
      }}
      validationSchema={ProfileSettingsSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Update Preferences
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field
                as={TextField}
                select
                name="sources"
                label="Sources"
                variant="outlined"
                fullWidth
                error={touched.sources && !!errors.sources}
                helperText={touched.sources && errors.sources}
              >
                {sourcesOptions.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Field>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field
                as={TextField}
                select
                name="categories"
                label="Categories"
                variant="outlined"
                fullWidth
                error={touched.categories && !!errors.categories}
                helperText={touched.categories && errors.categories}
              >
                {categoriesOptions.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Field>
            </Grid>
            <Grid item xs={12}>
              <Field
                as={TextField}
                select
                name="authors"
                label="Authors"
                variant="outlined"
                fullWidth
                error={touched.authors && !!errors.authors}
                helperText={touched.authors && errors.authors}
              >
                {authorsOptions.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Field>
            </Grid>
            <Grid item xs={12}>
              <Box display="flex" justifyContent="flex-end" mb={3}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Save Preferences
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}

export default ProfileSettings;
