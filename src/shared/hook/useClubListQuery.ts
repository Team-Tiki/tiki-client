import { useCallback } from 'react';

import { UseQueryResult, useQuery } from '@tanstack/react-query';

import { getClubInfo } from '@/shared/api/teams';
import { teams } from '@/shared/api/teams/type';

export const useClubListQuery = (selectedChip: string): UseQueryResult<teams, Error> => {
  const dd = useCallback(
    (data: teams) => {
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

  return useQuery<teams, Error>({
    queryKey: ['teams'],
    queryFn: () => getClubInfo<teams>(),
    select: (data) => dd(data),
  });
};
