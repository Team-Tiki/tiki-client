import { axiosInstance } from '@/shared/api/instance';

export const checkAuthCode = async (address: string, code: string) => {
  const response = await axiosInstance.post(`/mail/checking`, {
    address: address,
    code: code,
  });

  console.log(response);
  return response;
};
