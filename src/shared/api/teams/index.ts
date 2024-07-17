import { axiosInstance } from '@/shared/api/instance';

export const getClubInfo = async <T>(): Promise<T> => {
  const response = await axiosInstance.get('/teams');
  return response.data.data.teams;
};
