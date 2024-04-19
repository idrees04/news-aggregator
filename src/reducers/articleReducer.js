const initialState = {
    articles: [],
    loading: false,
    error: null
  };
  
  const articleReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_ARTICLES_REQUEST':
        return { ...state, loading: true };
      case 'FETCH_ARTICLES_SUCCESS':
        return { ...state, articles: action.payload, loading: false };
      case 'FETCH_ARTICLES_FAILURE':
        return { ...state, error: action.payload, loading: false };
      default:
        return state;
    }
  };
  
  export default articleReducer;
  