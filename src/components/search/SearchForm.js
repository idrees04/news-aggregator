import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const SearchFormSchema = Yup.object().shape({
  keyword: Yup.string().matches(/^[a-zA-Z0-9\s\-]+$/, 'Special characters are not allowed').required('Required'),
  from: Yup.date(),
  to: Yup.date().min(Yup.ref('from'), 'To date must be after from date'),
  sources: Yup.string().matches(/^[a-zA-Z0-9\s\-]+$/, 'Special characters are not allowed'),
});

function SearchForm({ onSearch }) {
  const [isSearching, setIsSearching] = useState(false);

  const handleSubmit = async (values, { setSubmitting }) => {
    if (!isSearching) {
      setIsSearching(true);
      await onSearch(values);
      setIsSearching(false);
    }
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{
        keyword: '',
        from: '',
        to: '',
        sources: '',
      }}
      validationSchema={SearchFormSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={6}>
              <Field
                as={TextField}
                name="keyword"
                label="Search Articles"
                variant="outlined"
                fullWidth
                error={touched.keyword && !!errors.keyword}
                helperText={touched.keyword && errors.keyword}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Field
                as={TextField}
                type="date"
                name="from"
                label="From"
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                fullWidth
                error={touched.from && !!errors.from}
                helperText={touched.from && errors.from}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Field
                as={TextField}
                type="date"
                name="to"
                label="To"
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                fullWidth
                error={touched.to && !!errors.to}
                helperText={touched.to && errors.to}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                as={TextField}
                name="sources"
                label="Sources"
                variant="outlined"
                fullWidth
                error={touched.sources && !!errors.sources}
                helperText={touched.sources && errors.sources}
              />
            </Grid>
            <Grid item xs={12}>
              <Box display="flex" justifyContent="flex-end" mb={3} >
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting || isSearching}
                  startIcon={isSearching && <CircularProgress size={20} />}
                >
                  {isSearching ? 'Searching...' : 'Search'}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}

export default SearchForm;
