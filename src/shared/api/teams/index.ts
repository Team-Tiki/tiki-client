import { axiosInstance } from '@/shared/api/instance';
import { TeamsInfo } from '@/shared/api/teams/type';

export const getClubInfo = async () => {
  const response = await axiosInstance.get<TeamsInfo>('/teams');
  return response.data;
};
