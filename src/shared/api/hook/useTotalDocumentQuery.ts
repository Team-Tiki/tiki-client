import { useQuery } from '@tanstack/react-query';

import { getTotalDocuments } from '@/shared/api/archiving/document';

export const useTotalDocumentQuery = (teamId: number, type: string, selectedId: string) => {
  return useQuery({
    queryKey: ['totalDocument', type],
    queryFn: () => getTotalDocuments(teamId, type),
    enabled: selectedId === 'total',
  });
};