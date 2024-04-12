import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ArticleList from '../components/articles/ArticleList';
import { Box } from '@mui/material';

const searchCriteria = {
  q: "tesla",
};

function Home() {


  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Latest News
      </Typography>
      <ArticleList searchCriteria={searchCriteria} type="home" />
      </Box>
    </Container>
  );
}

export default Home;
