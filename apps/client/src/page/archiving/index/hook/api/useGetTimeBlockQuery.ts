import { useSuspenseQuery } from '@tanstack/react-query';

import { getTimeline } from '@/shared/api/time-blocks/team/timeline';

export const useGetTimeBlockQuery = (teamId: number, timeline: string, year: number, month: number) => {
  return useSuspenseQuery({
    queryKey: ['timeBlock', month, year, teamId],
    queryFn: () => getTimeline(teamId, timeline, `${year}-${month.toString().padStart(2, '0')}`),
  });
};
