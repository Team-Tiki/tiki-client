import { useQuery } from '@tanstack/react-query';

import { getDocuments } from '@/shared/api/archiving';

export const useBlockQuery = (teamId: number, blockId: number) => {
  const { data, isSuccess, isError } = useQuery({
    queryKey: ['document', blockId],
    queryFn: () => getDocuments(teamId, blockId),
  });
  return { data, isSuccess, isError };
};
