import { axiosInstance } from '@/shared/api/instance';

export const getClubInfo = async () => {
  const response = await axiosInstance.get(`/members/teams`);

  return response.data;
};
