import { useQuery } from '@tanstack/react-query';

import { getClubInfo } from '@/shared/api/teams';
import { useTeamIdAction } from '@/shared/store/team';

export const useInitializeTeamId = () => {
  const { setTeamId } = useTeamIdAction();

  const { data, isSuccess } = useQuery({
    queryKey: ['clubInfo'],
    queryFn: () => getClubInfo(),
    enabled: !localStorage.getItem('teamId'),
  });

  if (isSuccess && data?.data?.teams) {
    // localStorage에 teamId가 없는 경우
    const team = data.data.teams.find((team) => team);

    if (team) {
      const teamId = team.teamId;
      localStorage.setItem('teamId', teamId.toString());

      setTeamId(teamId);

      return teamId;
    }
  }

  return Number(localStorage.getItem('teamId'));
};
