import { useQuery } from '@tanstack/react-query';

import { getTimeline } from '@/shared/api/time-blocks/team/timeline';

export const useGetTimeBlockQuery = (timeId: number, timeline: string, date: string) => {
  return useQuery({
    queryKey: ['timeBlock', date],
    queryFn: () => getTimeline(timeId, timeline, date),
  });
};
