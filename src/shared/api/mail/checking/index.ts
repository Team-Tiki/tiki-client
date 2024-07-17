import { axiosInstance } from '@/shared/api/instance';

export const postEmail = async (email: string) => {
  const response = await axiosInstance.post('/mail/signup', {
    email: email,
  });
  console.log(response);

  return response;
};
