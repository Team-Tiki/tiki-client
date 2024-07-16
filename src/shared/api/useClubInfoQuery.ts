import { useQuery } from '@tanstack/react-query';

import { getClubInfo } from '@/shared/api';

export const useClubInfoQuery = () => {
  return useQuery({
    queryKey: ['clubInfo'],
    queryFn: () => getClubInfo(),
  });
};
