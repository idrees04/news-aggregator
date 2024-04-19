export const fetchArticles = () => {
    return async (dispatch) => {
      try {
        dispatch({ type: 'FETCH_ARTICLES_REQUEST' });
        // Call your API to fetch articles
        const response = await fetch('/articles');
        const data = await response.json();
        dispatch({ type: 'FETCH_ARTICLES_SUCCESS', payload: data.articles });
      } catch (error) {
        dispatch({ type: 'FETCH_ARTICLES_FAILURE', payload: error.message });
      }
    };
  };
  