import { axiosInstance } from '@/shared/api/instance';
import { CategoryType } from '@/shared/api/teams/category/type';

export const getCategoryList = async () => {
  const response = await axiosInstance.get<CategoryType>('/teams/category');
  console.log(response.data);
  return response.data;
};
