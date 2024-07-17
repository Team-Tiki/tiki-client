import { axiosInstance } from '@/shared/api/instance';
import { TimeBlockData } from '@/shared/api/time-blocks/team/time-block/type';

export const getDocuments = async (teamId: number, blockId: number) => {
  const response = await axiosInstance.get<TimeBlockData>(`/time-blocks/team/${teamId}/time-block/${blockId}`);

  return response.data;
};
