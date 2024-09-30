import { useQuery } from '@tanstack/react-query';

import { getDocuments } from '@/shared/api/time-blocks/team/time-block';

export const useBlockInfoQuery = (teamId: number, blockId: number) => {
  return useQuery({
    queryKey: ['document', blockId],
    queryFn: () => getDocuments(teamId, blockId),
    enabled: !!blockId,
  });
};
