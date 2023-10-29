import axios from 'axios';
import config from '../config.json'
require('dotenv').config()

export const fetchRepositories = async () => {
  const headers = {
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
  };

  try {
    const response = await axios.get('https://api.github.com/user/repos?page=1&per_page=1000', { headers });
    return response.data;
  } catch (error) {
    console.error('Axios Error:', error);
    return [];
  }
};

export const postMailer = async (event) => {
  try {
    const response = await axios.post(`${config.devServerURL}/send`, event);
    return response.status;
  } catch (error) {
    throw error;
  }
};

