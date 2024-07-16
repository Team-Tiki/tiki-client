import { axiosInstance } from '@/shared/api/instance';

export const getClubInfo = async () => {
  const response = await axiosInstance.get(`/members/teams`);

  const clubInfoList = await response.data.data.belongTeamGetResponses;

  return clubInfoList;
};
