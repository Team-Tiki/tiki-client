import { $api } from '@/shared/api/client';
import { useInitializeTeamId } from '@/shared/hook/common/useInitializeTeamId';

export const useDriveData = () => {
  const teamId = useInitializeTeamId();

  return $api.useSuspenseQuery('get', '/api/v1/teams/{teamId}/drive', {
    params: {
      path: {
        teamId,
      },
    },
  });
};
