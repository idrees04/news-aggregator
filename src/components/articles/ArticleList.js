import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import ArticleCard from './ArticleCard';
import { fetchArticles } from '../../services/api';
import ErrorBoundary from '../../utils/ErrorBoundary';

function ArticleList({ searchCriteria, isSearchClicked, setIsSearchClicked }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticlesData = async () => {
      try {
        setLoading(true);
        const fetchedArticles = await fetchArticles(searchCriteria);
        setArticles(fetchedArticles);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    if (isSearchClicked) {
      fetchArticlesData();
      setIsSearchClicked(false);
    }
  }, [searchCriteria, isSearchClicked]);

  return (
    <Container maxWidth="md">
      {error ? (
        <ErrorBoundary Error={error} /> 
      ) : loading ? (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <CircularProgress />
          <Typography variant="body1" align="center" style={{ marginTop: '20px' }}>
            Loading...
          </Typography>
        </div>
      ) : articles.length === 0 ? (
        <Typography variant="body1" align="center">
          No articles found.
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {articles.map((article, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ArticleCard article={article} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}

export default ArticleList;
