import { useQuery } from '@tanstack/react-query';

import { getTimeline } from '@/shared/api/archiving/time-blocks';

export const useGetTimeBlockQuery = (teamId: number, timeline: string, date: string) => {
  return useQuery({
    queryKey: ['timeBlock', teamId, date],
    queryFn: () => getTimeline(teamId, timeline, date),
  });
};
