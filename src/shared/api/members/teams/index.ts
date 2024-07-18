import { axiosInstance } from '@/shared/api/instance';
import { ClubInfo } from '@/shared/api/members/teams/type';

export const getClubInfo = async () => {
  const response = await axiosInstance.get<ClubInfo>(`/members/teams`);
  console.log('동아리 정보 조회');
  return response.data;
};
