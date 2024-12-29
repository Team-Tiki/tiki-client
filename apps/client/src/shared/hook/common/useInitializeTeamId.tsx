import { paths } from '@/shared/__generated__/schema';
import { $api } from '@/shared/api/client';
import { useTeamIdAction } from '@/shared/store/team';

type TeamResponse = paths['/api/v1/teams']['get']['responses']['200']['content']['*/*'];

export const useInitializeTeamId = () => {
  const { setTeamId } = useTeamIdAction();

  const { data, isSuccess } = $api.useQuery('get', '/api/v1/members/teams', {
    select: (response: TeamResponse) => {
      return response.data;
    },
  });

  if (isSuccess && !localStorage.getItem('teamId')) {
    // 소속된 팀이 없는 경우 0 반환
    if (data.data?.belongTeamGetResponses.length === 0) {
      return 0;
    }

    const teamId = data.data?.belongTeamGetResponses[0].id ?? 0;
    localStorage.setItem('teamId', teamId!.toString());

    setTeamId(teamId);

    return teamId;
  }

  return Number(localStorage.getItem('teamId'));
};
