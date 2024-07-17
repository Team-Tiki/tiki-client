import { useCallback } from 'react';

import { UseQueryResult, useQuery } from '@tanstack/react-query';

import { getClubInfo } from '@/shared/api/teams';
import { TeamsType } from '@/shared/api/teams/type';

export const useClubListQuery = (selectedChip: string): UseQueryResult<TeamsType, Error> => {
  const filterChips = useCallback(
    (data: TeamsType) => {
      if (selectedChip === '전체') {
        return data;
      }
      const filteredTeams = data.data.teams.filter((each) => each.category === selectedChip);

      return {
        ...data,
        data: {
          ...data.data,
          teams: filteredTeams,
        },
      };
    },
    [selectedChip]
  );

  return useQuery<TeamsType, Error>({
    queryKey: ['teams'],
    queryFn: () => getClubInfo<TeamsType>(),
    select: (data) => filterChips(data),
  });
};
