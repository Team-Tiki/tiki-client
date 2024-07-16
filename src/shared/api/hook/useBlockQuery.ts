import { useQuery } from '@tanstack/react-query';

import { getDocuments } from '@/shared/api/archiving/document';

export const useBlockQuery = (teamId: number, blockId: number, selectedId: string) => {
  return useQuery({
    queryKey: ['document', blockId],
    queryFn: () => getDocuments(teamId, blockId),
    enabled: selectedId === 'selected',
  });
};
