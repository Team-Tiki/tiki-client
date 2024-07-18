import { useQuery } from '@tanstack/react-query';

import { getTimeline } from '@/shared/api/time-blocks/team/timeline';

export const useGetTimeBlockQuery = (teamId: number, timeline: string, date: string) => {
  return useQuery({
    queryKey: ['timeBlock', teamId, date],
    queryFn: () => getTimeline(teamId, timeline, date),
  });
};
