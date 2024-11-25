import { axiosInstance } from '@/shared/api/instance';
import { ClubInfo } from '@/shared/api/members/teams/type';

export const getClubInfo = async () => {
  const response = await axiosInstance.get<ClubInfo>(`/members/teams`);

  return response.data.data;
};
