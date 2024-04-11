import axios from 'axios';

const API_KEY = '2906a854823f4ed6a36f98901a5e7617';
const API_URL = 'https://newsapi.org/v2/';

const instance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchArticles = async (query) => {
  try {
    const response = await instance.get(`everything?q=${query}&apiKey=${API_KEY}`);
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw error;
  }
};

// Add more API functions as needed
