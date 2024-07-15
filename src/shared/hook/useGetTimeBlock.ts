import { useQuery } from '@tanstack/react-query';

import { getTimeline } from '@/shared/api/api-gateway/time-blocks/team/getTimeline';

export const useGetTimeBlock = (timeId: number) => {
  return useQuery({
    queryKey: ['timeBlock', timeId],
    queryFn: () => getTimeline(timeId, 'executive', ''),
  });
};
