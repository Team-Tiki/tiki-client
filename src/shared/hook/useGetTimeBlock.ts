import { useQuery } from '@tanstack/react-query';

import { getTimeline } from '@/shared/api/api-gateway/time-blocks/team/getTimeline';

export const useGetTimeBlock = (timeId: number, timeline: string, date: string) => {
  return useQuery({
    queryKey: ['timeBlock', date],
    queryFn: () => getTimeline(timeId, timeline, date),
  });
};
