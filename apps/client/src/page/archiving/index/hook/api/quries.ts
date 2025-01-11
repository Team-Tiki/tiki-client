import { $api } from '@/shared/api/client';
import { useInitializeTeamId } from '@/shared/hook/common/useInitializeTeamId';

export const useBlockDetailInfoQuery = (timeBlockId: number) => {
  const teamId = useInitializeTeamId();

  return $api.useQuery('get', '/api/v1/teams/{teamId}/time-block/{timeBlockId}', {
    params: {
      path: {
        teamId,
        timeBlockId,
      },
    },
  });
};
