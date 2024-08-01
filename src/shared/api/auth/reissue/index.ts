import { axiosPublicInstance } from '@/shared/api/instance';

export const getReissuedToken = async () => {
  const response = await axiosPublicInstance.get('/auth/reissue');

  return response.data;
};
