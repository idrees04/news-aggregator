import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const SearchFormSchema = Yup.object().shape({
  keyword: Yup.string().required('Keyword is required'),
});

function SearchForm() {
  const handleSubmit = (values) => {
    // Handle search functionality (e.g., call API with keyword)
    console.log('Search keyword:', values.keyword);
  };

  return (
    <Formik
      initialValues={{
        keyword: '',
      }}
      validationSchema={SearchFormSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <Field
            as={TextField}
            name="keyword"
            label="Search Articles"
            variant="outlined"
            fullWidth
            error={touched.keyword && !!errors.keyword}
            helperText={touched.keyword && errors.keyword}
          />
          <Button type="submit" variant="contained" color="primary">
            Search
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default SearchForm;
