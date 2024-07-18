import { axiosInstance } from '@/shared/api/instance';
import { TimeBlockData } from '@/shared/api/time-blocks/team/time-block/type';

export const getDocuments = async (teamId: number, blockId: number) => {
  const response = await axiosInstance.get<TimeBlockData>(`/time-blocks/team/${teamId}/time-block/${blockId}`);

  return response.data;
};

export const deleteBlock = async (teamId: number, timeBlockId: number) => {
  const response = await axiosInstance.delete(`/time-blocks/team/${teamId}/time-block/${timeBlockId}`);

  return response;
};
