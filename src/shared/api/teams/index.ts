import { axiosInstance } from '@/shared/api/instance';

export const getClubInfo = async <T>() => {
  const response = await axiosInstance.get<T>('/teams');
  return response.data;
};
