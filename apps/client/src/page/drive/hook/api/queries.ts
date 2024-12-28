import { $api } from '@/shared/api/client';
import { useTeamId } from '@/shared/store/team';

export const useDriveData = () => {
  const teamId = useTeamId();

  return $api.useSuspenseQuery('get', '/api/v1/teams/{teamId}/drive', {
    params: {
      path: {
        teamId,
      },
    },
  });
};
