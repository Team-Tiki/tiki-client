import { useQuery } from '@tanstack/react-query';

import { getTimeline } from '@/shared/api/archiving/time-blocks';

export const useGetTimeBlockQuery = (timeId: number, timeline: string, date: string) => {
  return useQuery({
    queryKey: ['timeBlock', date],
    queryFn: () => getTimeline(timeId, timeline, date),
  });
};
