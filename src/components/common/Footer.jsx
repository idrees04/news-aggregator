import React from 'react';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <footer>
      <Typography variant="body2" color="textSecondary" align="center" pt={3}>
        &copy; {new Date().getFullYear()} News Aggregator
      </Typography>
    </footer>
  );
}

export default Footer;
