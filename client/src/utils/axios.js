import axios from 'axios';
import config from '../config.json'

export const fetchRepositories = async () => {
  const headers = {
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
  };

  try {
    const response = await axios.get(`${config.prodServerURL}/api/github`, { headers });
    return response.data;
  } catch (error) {
    console.error('Axios Error:', error);
    return [];
  }
};

export const postMailer = async (event) => {
  try {
    const response = await axios.post(`${config.prodServerURL}/api/send`, event);
    return response;
  } catch (error) {
    throw error;
  }
};

