import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { paths } from '@/shared/__generated__/schema';
import { $api } from '@/shared/api/client';
import { PATH } from '@/shared/constant/path';
import { useTeamIdAction } from '@/shared/store/team';

type TeamResponse = paths['/api/v1/teams']['get']['responses']['200']['content']['*/*'];

export const useInitializeTeamId = () => {
  const { setTeamId } = useTeamIdAction();
  const navigate = useNavigate();

  const { data, isSuccess } = $api.useSuspenseQuery('get', '/api/v1/members/teams', {
    select: (response: TeamResponse) => {
      return response.data;
    },
  });

  useEffect(() => {
    if (isSuccess && !localStorage.getItem('teamId')) {
      if (data.data?.belongTeamGetResponses.length === 0) {
        navigate(PATH.ONBOARDING);

        return;
      }
      const teamId = data.data?.belongTeamGetResponses[0].id ?? 0;

      localStorage.setItem('teamId', teamId!.toString());
      setTeamId(teamId);
    } else if (!isSuccess) {
      navigate(PATH.LOGIN);
    }
  });

  return Number(localStorage.getItem('teamId'));
};
