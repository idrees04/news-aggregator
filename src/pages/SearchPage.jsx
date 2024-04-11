import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import SearchForm from '../components/search/SearchForm';
import ArticleList from '../components/articles/ArticleList';

function SearchPage() {
  return (
    <Container maxWidth="md">
      <Typography variant="h2" align="center" gutterBottom>
        Search Articles
      </Typography>
      <SearchForm />
      <ArticleList />
    </Container>
  );
}

export default SearchPage;
