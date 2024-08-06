import { axiosPublicInstance } from '@/shared/api/instance';

type TokenResponse = {
  data: {
    accessToken: string;
  };
};
export const getReissuedToken = async () => {
  const response = await axiosPublicInstance.get<TokenResponse>('/auth/reissue');

  return response.data;
};
