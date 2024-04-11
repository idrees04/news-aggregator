import React, { useState, useEffect } from 'react';
import { fetchArticles } from '../../services/api.js'; // Assuming you have a function to fetch articles from an API

function ArticleList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Fetch articles from the API when the component mounts
    fetchArticles()
      .then((data) => setArticles(data))
      .catch((error) => console.error('Error fetching articles:', error));
  }, []);

  return (
    <div>
      {articles.map((article) => (
        <div key={article.id}>
          <h3>{article.title}</h3>
          <p>{article.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ArticleList;
