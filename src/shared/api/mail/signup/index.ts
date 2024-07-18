import { axiosPublicInstance } from '@/shared/api/instance';

export const checkAuthCode = async (email: string, code: string) => {
  const response = await axiosPublicInstance.post(`/mail/checking`, {
    email: email,
    code: code,
  });

  return response;
};
