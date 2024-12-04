import { useQuery } from '@tanstack/react-query';

import { getTotalDocuments } from '@/shared/api/documents/team/timeline';

export const useTotalDocumentQuery = (teamId: number, type: string) => {
  return useQuery({
    queryKey: ['document', 'total'],
    queryFn: () => getTotalDocuments(teamId, type),
  });
};
