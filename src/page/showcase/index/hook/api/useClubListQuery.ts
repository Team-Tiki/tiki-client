import { useCallback } from 'react';

import { useQuery } from '@tanstack/react-query';

import { getClubInfo } from '@/shared/api/teams';
import { TeamsInfo } from '@/shared/api/teams/type';

export const useClubListQuery = (selectedChip: string) => {
  const filterChips = useCallback(
    (data: TeamsInfo) => {
      if (selectedChip === '전체') {
        return data;
      }
      const filteredTeams = data.data.teams.filter((each) => each.category === selectedChip);

      return {
        ...data,
        data: {
          ...data,
          teams: filteredTeams,
        },
      };
    },
    [selectedChip]
  );

  return useQuery({
    queryKey: ['teams'],
    queryFn: () => getClubInfo(),
    select: (data) => filterChips(data),
  });
};
