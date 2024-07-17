import { axiosInstance } from '@/shared/api/instance';

export const getCategoryList = async <T>() => {
  const response = await axiosInstance.get<T>('/teams/category');
  return response.data;
};
