import axios from 'axios';

export const getClubInfo = async <T>(): Promise<T> => {
  const response = await axios.get('/team');
  return response.data.teams;
};
