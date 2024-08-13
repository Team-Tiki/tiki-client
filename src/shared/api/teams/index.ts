import { axiosInstance } from '@/shared/api/instance';
import { CreateTeam, TeamsInfo } from '@/shared/api/teams/type';

export const getClubInfo = async () => {
  const response = await axiosInstance.get<TeamsInfo>('/teams');
  return response.data;
};

export const postTeam = async (data: CreateTeam) => {
  const response = await axiosInstance.post('/teams', data);
  console.log('성공', response);

  return response.data;
};
