import { axiosInstance } from '@/shared/api/instance';

export const getClubInfo = async <T>(): Promise<T> => {
  const response = await axiosInstance.get('/teams');
  return response.data.data.teams;
};

export const getCategoryList = async () => {
  const response = await axiosInstance.get('/teams/category');
  return response.data.data.categories;
};
