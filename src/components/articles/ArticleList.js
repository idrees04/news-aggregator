import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import ArticleCard from './ArticleCard';
import { fetchArticles } from '../../services/api';
import ErrorBoundary from '../../utils/ErrorBoundary';
import { connect } from 'react-redux';
import { fetchArticles } from '../../actions/articleActions';

const ArticleList = ({ articles, fetchArticles }) => {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticlesData = async () => {
      try {
        setLoading(true);
        let fetchedArticles;

        // Retrieve preferences from localStorage
        const preferences = JSON.parse(localStorage.getItem('preferences'));
        let criteria = searchCriteria;

        // Check if preferences exist and construct searchCriteria accordingly
        if (preferences && preferences.sources.id && preferences.authors) {
          const { sources, authors } = preferences;
          const { id } = sources;

          criteria = { ...criteria, sources: id };

          fetchedArticles = await fetchArticles(criteria);
          fetchedArticles = fetchedArticles.filter(article => authors.includes(article.author));

        } else {
          // If preferences are not set, fetch articles without filtering

          fetchedArticles = await fetchArticles(searchCriteria);
        }

        localStorage.setItem('articles', JSON.stringify(fetchedArticles));
        setArticles(fetchedArticles);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    if (type === 'home') {
      fetchArticlesData();
    } else if (type === 'search') {
      fetchArticlesData();
      setIsSearchClicked(false);
    }
  }, [searchCriteria, isSearchClicked, setIsSearchClicked, type]);

  return (
    <Container maxWidth='lg'>
      {error ? (
        <ErrorBoundary Error={error} />
      ) : loading ? (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <CircularProgress />
          <Typography
            variant='body1'
            align='center'
            style={{ marginTop: '20px' }}
          >
            Loading...
          </Typography>
        </div>
      ) : articles.length === 0 ? (
        <Typography variant='body1' align='center'>
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

const mapStateToProps = (state) => ({
  articles: state.article.articles,
});

export default connect(mapStateToProps, { fetchArticles })(ArticleList);
