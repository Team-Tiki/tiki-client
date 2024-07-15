import { TimeBlockList } from '@/page/archiving/type/blockType';

import { axiosInstance } from '@/shared/api/instance';

export const getTimeline = async (teamId: number, timeline: string, date: string) => {
  try {
    const response = await axiosInstance<TimeBlockList>(`/time-blocks/team/${teamId}`, {
      params: {
        timeline: timeline,
        date: date,
      },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
      },
    });
    console.log(response.data.data.timeBlocks);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};
