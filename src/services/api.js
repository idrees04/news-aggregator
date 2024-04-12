import axios from 'axios';

const API_KEY = '2906a854823f4ed6a36f98901a5e7617';
const API_URL = 'https://newsapi.org/v2/everything';

const instance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchArticles = async (query) => {
  const { keywords, dateRange, publishers, language } = query;
  
  const params = {
    apiKey: API_KEY,
    q: keywords,
    from: dateRange?.from,
    to: dateRange?.to,
    domains: publishers?.join(','),
    language: language,
  };

  try {
    const response = await instance.get('', { params });
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw error;
  }
};
