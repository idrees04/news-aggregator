import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const cardStyles = {
  marginBottom: '16px',
  width: '100%',
  margin: 'auto',
  backgroundColor: '#f5f5f5',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  transition: 'opacity 0.2s ease-in-out',
  cursor: 'pointer',
  '&:hover': {
    opacity: 0.9,
  },
};

const handleImageError = (event) => {
  event.target.style.display = 'none';
};

function ArticleCard({ article, onImageError }) {
  const imageUrl = article.urlToImage || 'path/to/placeholder.jpg'; // Placeholder with default value

  return (
    <Card variant="outlined" style={cardStyles}>
      <img
        src={imageUrl}
        alt={article.title}
        onError={onImageError || handleImageError}
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
          borderTopLeftRadius: '4px',
          borderTopRightRadius: '4px',
        }}
      />
      <CardContent style={{ padding: '16px 8px' }}>
        <Typography variant="h6" component="h2" style={{ marginBottom: '8px', fontSize: '18px', color: '#333', fontWeight: 'bold' }}>
          {article.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom style={{ marginBottom: '8px', color: '#333' }}>
          {new Date(article.publishedAt).toLocaleString()}
        </Typography>
        <Typography variant="body1" component="p" style={{ marginBottom: '8px', fontSize: '16px', color: '#333' }}>
          {article.description}
        </Typography>
        <Typography variant="caption" color="textSecondary">
          {article.source.name}
          <a href={article.url} style={{ float: 'right', color: '#007bff' }}>
            Read More
          </a>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ArticleCard;
