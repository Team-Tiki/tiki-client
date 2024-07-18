import { axiosPublicInstance } from '@/shared/api/instance';

export const postEmail = async (email: string) => {
  const response = await axiosPublicInstance.post('/mail/signup', {
    email: email,
  });

  return response;
};
