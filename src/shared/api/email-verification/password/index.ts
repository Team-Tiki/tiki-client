import { axiosPublicInstance } from '@/shared/api/instance';

export const reSendEmail = async (email: string) => {
  const response = await axiosPublicInstance.post('/email-verification/password', {
    email: email,
  });

  return response;
};
