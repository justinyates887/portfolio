import axios from 'axios';

export const fetchRepositories = async () => {
  const headers = {
    Authorization: `Bearer `,
  };

  try {
    const response = await axios.get('https://api.github.com/user/repos', { headers });
    return response.data;
  } catch (error) {
    console.error('Axios Error:', error);
    return [];
  }
};
