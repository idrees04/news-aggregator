import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ArticleList from '../components/articles/ArticleList';

function Home() {
  return (
    <Container maxWidth="md">
      <Typography variant="h2" align="center" gutterBottom>
        Latest News
      </Typography>
      <ArticleList />
    </Container>
  );
}

export default Home;
