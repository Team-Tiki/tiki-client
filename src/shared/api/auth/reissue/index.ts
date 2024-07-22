import axios from 'axios';

export const getReissuedToken = async () => {
  const response = await axios.get('/auth/reissue');

  return response.data;
};
