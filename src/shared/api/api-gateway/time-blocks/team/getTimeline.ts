import { TimeBlockList } from '@/page/archiving/type/blockType';

import { axiosInstance } from '@/shared/api/instance';

export const getTimeline = async (teamId: number, timeline: string, date: string) => {
  const accessToken =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJtZW1iZXJJZCI6NywiaWF0IjoxNzIwODE1MjY0LCJleHAiOjE3MjA4MjczNjB9.ECyNxDGS6Ir_TbyuHp2E7tFRh1afcSwwGVixq1gQd4jSdNyA10Ep_kwARqukMdGWdyLoT_XxTNLu2CWTHe41VQ';
  try {
    const response = await axiosInstance<TimeBlockList>(`/time-blocks/team/${teamId}`, {
      params: {
        timeline: timeline,
        date: date,
      },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log(response.data.data.timeBlocks);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};
