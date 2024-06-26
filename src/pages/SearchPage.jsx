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
    sources: '',
  });
  const [isSearchClicked, setIsSearchClicked] = useState(false);

  const handleSearch = (values) => {
    console.log("values", values);
    if (!values.keyword && !values.sources) {
      return;
    }

    setSearchCriteria({
      q: values.keyword,
      from: values.from,
      to: values.to,
      sources: values.sources,
    });
    setIsSearchClicked(true);
  };

  return (
    <Container maxWidth='lg'>
      <Box sx={{ my: 4 }}>
        <Typography variant='h4' align='center' gutterBottom>
          Search Articles
        </Typography>
        <SearchForm onSearch={handleSearch} />
        {searchCriteria.q !== '' && (
          <ArticleList
            searchCriteria={searchCriteria}
            isSearchClicked={isSearchClicked}
            setIsSearchClicked={setIsSearchClicked}
            type="search"
          />
        )}
      </Box>
    </Container>
  );
}

export default SearchPage;
