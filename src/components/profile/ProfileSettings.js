import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik'; // Importing useFormik
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Box, MenuItem } from '@mui/material';
import notyf from '../common/notyfInstance';

const ProfileSettingsSchema = Yup.object().shape({
  sources: Yup.string().required('Sources are required'),
  authors: Yup.string().required('Authors are required'),
});

function ProfileSettings() {
  const [sourcesOptions, setSourcesOptions] = useState([]);
  const [authorsOptions, setAuthorsOptions] = useState([]);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const articles_ = JSON.parse(localStorage.getItem('articles')) || [];
    setArticles(articles_);
    const filteredArticles = articles_.filter(
      (article) => article.source.id !== null
    );

    const uniqueSources = [
      ...new Set(filteredArticles.map((article) => article.source.name)),
    ];
    const uniqueAuthors = [
      ...new Set(articles_.map((article) => article.author)),
    ];
    setSourcesOptions(uniqueSources);
    setAuthorsOptions(uniqueAuthors);
  }, []);

  const formik = useFormik({
    initialValues: {
      sources: '',
      authors: '',
    },
    validationSchema: ProfileSettingsSchema,
    onSubmit: (values) => {
      let { sources, authors } = values;
      console.log('articles', articles);
      sources = articles.find((article) => article.source.name === sources);
      const preferences = {
        sources,
        authors,
      };
      localStorage.setItem('preferences', JSON.stringify(preferences));
      notyf.success('Preferences saved successfully!');
    },
  });

  const handleSourcesChange = (event) => {
    const selectedSource = event.target.value;
    const filteredAuthors = articles
      .filter((article) => article.source.name === selectedSource)
      .map((article) => article.author);
    setAuthorsOptions([...new Set(filteredAuthors)]);
    formik.setFieldValue('sources', selectedSource); // Update Formik field value
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant='h6' gutterBottom>
            Update Preferences
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            select
            name='sources'
            label='Sources'
            variant='outlined'
            fullWidth
            value={formik.values.sources}
            onChange={handleSourcesChange}
            error={formik.touched.sources && !!formik.errors.sources}
            helperText={formik.touched.sources && formik.errors.sources}
          >
            {sourcesOptions.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            select
            name='authors'
            label='Authors'
            variant='outlined'
            fullWidth
            value={formik.values.authors}
            onChange={formik.handleChange}
            error={formik.touched.authors && !!formik.errors.authors}
            helperText={formik.touched.authors && formik.errors.authors}
          >
            {authorsOptions.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <Box display='flex' justifyContent='flex-end' mb={3}>
            <Button type='submit' variant='contained' color='primary'>
              Save Preferences
            </Button>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
}

export default ProfileSettings;
