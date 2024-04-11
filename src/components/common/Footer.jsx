import React from 'react';
import Typography from '@mui/material/Typography';

function Footer() {
  return (
    <footer>
      <Typography variant="body2" color="textSecondary" align="center">
        © {new Date().getFullYear()} News Aggregator
      </Typography>
    </footer>
  );
}

export default Footer;
