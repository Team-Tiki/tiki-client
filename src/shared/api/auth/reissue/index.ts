import { axiosInstance } from '@/shared/api/instance';

export const getReissuedToken = async () => {
  const response = await axiosInstance.get('/auth/reissue');

  return response.data;
};
