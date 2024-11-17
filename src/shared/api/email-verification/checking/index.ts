import { axiosPublicInstance } from '@/shared/api/instance';

export const checkAuthCode = async (email: string, code: string) => {
  const response = await axiosPublicInstance.post(`/email-verification/checking`, {
    email: email,
    code: code,
  });

  return response;
};
