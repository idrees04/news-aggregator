import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const SearchFormSchema = Yup.object().shape({
  keyword: Yup.string().required('Required'),
  from: Yup.date(),
  to: Yup.date().min(Yup.ref('from'), 'To date must be after from date'),
  domains: Yup.string().matches(
    /^(https?:\/\/)?([\w-]+\.)*[\w-]+(\.[a-z]{2,})?(:\d{1,5})?(\/.*)?$/,
    'Invalid URL format'
  ).max(255, 'Only one URL is allowed'),
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
        domains: '',
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
                name="domains"
                label="Source"
                variant="outlined"
                fullWidth
                error={touched.domains && !!errors.domains}
                helperText={touched.domains && errors.domains}
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
