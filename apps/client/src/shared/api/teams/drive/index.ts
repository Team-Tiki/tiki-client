import { axiosInstance } from '@/shared/api/instance';
import { DriveResponse } from '@/shared/api/teams/drive/type';

export const getDriveData = async (teamId: number) => {
  const response = await axiosInstance.get<DriveResponse>(`/teams/${teamId}/drive`);

  return response.data;
};
