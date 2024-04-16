import axios from 'axios';

 const API_KEY = '2906a854823f4ed6a36f98901a5e7617';
// const API_KEY = 'b3bad7cfe3d146eba8261d62eb4805fc';

const instance = axios.create({
  baseURL: 'https://newsapi.org/v2',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchArticles = async (query) => {
  const { q, from, to, sources,  } = query;
  let url = '/everything';
  let params = {
    apiKey: API_KEY,
    q: q,
    from: from,
    to: to,
    sources: sources,
  };

  try {
    const response = await instance.get(url, { params });
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw error;
  }
};
