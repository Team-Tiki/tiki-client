import { TimeBlockList } from '@/page/archiving/type/blockType';

import { axiosInstance } from '@/shared/api/instance';

export const getTimeline = async (teamId: number, timeline: string, date: string) => {
  const response = await axiosInstance.get<TimeBlockList>(
    `/time-blocks/team/${teamId}/timeline?type=${timeline}&date=${date}`
  );

  return response.data.data;
};
