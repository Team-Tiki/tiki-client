import { axiosInstance } from '@/shared/api/instance';

export const reSendEmail = async (email: string) => {
  const response = await axiosInstance.post('/mail/password', {
    email: email,
  });
  console.log(response);

  return response;
};
