import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const ProfileSettingsSchema = Yup.object().shape({
  sources: Yup.string().required('Preferred sources are required'),
  categories: Yup.string().required('Preferred categories are required'),
  authors: Yup.string().required('Preferred authors are required'),
});

function ProfileSettings() {
  const handleSubmit = (values) => {
    // Send values to backend or store in browser storage
    console.log('Preferences submitted:', values);
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
                Update Your Preferences
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field
                as={TextField}
                name="sources"
                label="Preferred Sources"
                variant="outlined"
                fullWidth
                error={touched.sources && !!errors.sources}
                helperText={touched.sources && errors.sources}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field
                as={TextField}
                name="categories"
                label="Preferred Categories"
                variant="outlined"
                fullWidth
                error={touched.categories && !!errors.categories}
                helperText={touched.categories && errors.categories}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                as={TextField}
                name="authors"
                label="Preferred Authors"
                variant="outlined"
                fullWidth
                error={touched.authors && !!errors.authors}
                helperText={touched.authors && errors.authors}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Save Preferences
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}

export default ProfileSettings;
