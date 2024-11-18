import { useQuery } from '@tanstack/react-query';

import { getClubInfo } from '@/shared/api/members/teams';

export const useClubInfoQuery = () => {
  return useQuery({
    queryKey: ['clubInfo'],
    queryFn: () => getClubInfo(),

    enabled: true,
  });
};
