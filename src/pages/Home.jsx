import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ArticleList from '../components/articles/ArticleList';

const searchCriteria = {
  q: "tesla",
};

function Home() {
  return (
    <Container maxWidth="md">
      <Typography variant="h2" align="center" gutterBottom>
        Latest News
      </Typography>
      <ArticleList searchCriteria={searchCriteria} isSearchClicked={true} />
    </Container>
  );
}

export default Home;
