import { axiosInstance } from '@/shared/api/instance';

export const postEmail = async (address: string) => {
  const response = await axiosInstance.post('/mail/signup', {
    address: address,
  });

  console.log(response);
  return response;
};
