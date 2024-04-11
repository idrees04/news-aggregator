import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function ArticleCard({ article }) {
  return (
    <Card variant="outlined" style={{ marginBottom: '16px' }}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {article.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          {article.publishedAt}
        </Typography>
        <Typography variant="body1" component="p">
          {article.description}
        </Typography>
        <Typography variant="caption" color="textSecondary">
          {article.source.name}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ArticleCard;
