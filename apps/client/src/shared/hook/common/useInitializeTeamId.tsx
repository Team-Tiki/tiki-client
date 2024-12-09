import { paths } from '@/shared/__generated__/schema';
import { $api } from '@/shared/api/client';
import { useTeamIdAction } from '@/shared/store/team';

type TeamResponse = paths['/api/v1/teams']['get']['responses']['200']['content']['*/*'];

export const useInitializeTeamId = () => {
  const { setTeamId } = useTeamIdAction();

  const { data, isSuccess } = $api.useQuery('get', '/api/v1/teams', {
    select: (response: TeamResponse) => {
      return response.data;
    },
  });

  if (isSuccess && !localStorage.getItem('teamId')) {
    const teamId = (data?.data?.teams && data?.data.teams[0]?.teamId) ?? 0;
    localStorage.setItem('teamId', teamId!.toString());

    setTeamId(teamId);

    return teamId;
  }

  return Number(localStorage.getItem('teamId'));
};
