import { axiosPublicInstance } from '@/shared/api/instance';

export const reSendEmail = async (email: string) => {
  const response = await axiosPublicInstance.post('/mail/password', {
    email: email,
  });

  return response;
};
