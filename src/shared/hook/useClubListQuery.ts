import { UseQueryResult, useQuery } from '@tanstack/react-query';

import { getClubInfo } from '@/shared/api/teams';
import { ClubType } from '@/shared/api/teams/type';

export const useClubListQuery = (): UseQueryResult<ClubType[], Error> => {
  return useQuery<ClubType[], Error>({
    queryKey: ['teams'],
    queryFn: () => getClubInfo<ClubType[]>(),
  });
};
