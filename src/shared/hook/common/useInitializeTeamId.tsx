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

  if (isSuccess && data?.data?.teams.length > 0) {
    // localStorage에 teamId가 없는 경우
    const teamId = data.data.teams.find((team) => team.teamId)!.teamId;
    localStorage.setItem('teamId', teamId.toString());

    setTeamId(teamId);

    return teamId;
  }

  return Number(localStorage.getItem('teamId'));
};
