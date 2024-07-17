import { useQuery } from '@tanstack/react-query';

import { getReissuedToken } from '@/shared/api/auth/reissue';

export const useReIssueQuery = () => {
  return useQuery({
    queryKey: ['reissue'],
    queryFn: getReissuedToken,
  });
};
