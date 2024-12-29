import { useNavigate } from 'react-router-dom';

import { paths } from '@/shared/__generated__/schema';
import { $api } from '@/shared/api/client';
import { PATH } from '@/shared/constant/path';
import { useTeamIdAction } from '@/shared/store/team';

type TeamResponse = paths['/api/v1/teams']['get']['responses']['200']['content']['*/*'];

export const useInitializeTeamId = () => {
  const { setTeamId } = useTeamIdAction();
  const navigate = useNavigate();

  const { data, isSuccess } = $api.useQuery('get', '/api/v1/members/teams', {
    select: (response: TeamResponse) => {
      return response.data;
    },
  });

  if (isSuccess && !localStorage.getItem('teamId')) {
    if (data.data?.belongTeamGetResponses.length === 0) {
      navigate(PATH.ONBOARDING);
    }

    const teamId = data.data?.belongTeamGetResponses[0].id ?? 0;

    if (teamId === 0) {
      navigate(PATH.ONBOARDING);
    }

    localStorage.setItem('teamId', teamId!.toString());
    setTeamId(teamId);

    return teamId;
  }

  return Number(localStorage.getItem('teamId'));
};
