import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import SearchForm from '../components/search/SearchForm';
import ArticleList from '../components/articles/ArticleList';
import { Box } from '@mui/material';

function SearchPage() {
  const [searchCriteria, setSearchCriteria] = useState({
    q: '',
    from: '',
    to: '',
    domains: '',
  });
  const [isSearchClicked, setIsSearchClicked] = useState(false);

  const handleSearch = (values) => {
    if (!values.keyword && !values.domains) {
      return;
    }

    setSearchCriteria({
      q: values.keyword,
      from: values.from,
      to: values.to,
      domains: values.domains,
    });
    setIsSearchClicked(true);
  };

  return (
    <Container maxWidth='md'>
      <Box sx={{ my: 4 }}>
        <Typography variant='h4' align='center' gutterBottom>
          Search Articles
        </Typography>
        <SearchForm onSearch={handleSearch} />
        {searchCriteria.q != '' && (
          <ArticleList
            searchCriteria={searchCriteria}
            isSearchClicked={isSearchClicked}
            setIsSearchClicked={setIsSearchClicked}
          />
        )}
      </Box>
    </Container>
  );
}

export default SearchPage;
