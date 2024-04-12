import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ArticleCard from './ArticleCard';
import { fetchArticles } from '../../services/api';

function ArticleList({ searchCriteria }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticlesData = async () => {
      try {
        const fetchedArticles = await fetchArticles(searchCriteria);
        setArticles(fetchedArticles);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching articles:', error);
        setLoading(false);
      }
    };

    fetchArticlesData();
  }, [searchCriteria]);

  return (
    <Container maxWidth="md">
      {loading ? (
        <Typography variant="body1" align="center">
          Loading...
        </Typography>
      ) : (
        <div>
          {articles.map((article, index) => (
            <ArticleCard key={index} article={article} />
          ))}
        </div>
      )}
    </Container>
  );
}

export default ArticleList;
