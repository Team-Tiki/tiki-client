import axiosInstance from '@/shared/api/instance';
import { TimeBlockCreate } from '@/shared/api/time-blocks/team/time-block/type';

export const postTimeBlock = async (teamId: number, type: string, data: TimeBlockCreate) => {
  const response = await axiosInstance.post(`/time-blocks/team/${teamId}/time-block`, data, {
    params: {
      type: type,
    },
  });
  return response.data;
};
