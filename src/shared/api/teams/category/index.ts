import { axiosInstance } from '@/shared/api/instance';

export const getCategoryList = async () => {
  const response = await axiosInstance.get('/teams/category');
  return response.data.data.categories;
};
