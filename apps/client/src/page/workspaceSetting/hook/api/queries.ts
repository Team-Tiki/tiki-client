import { $api } from '@/shared/api/client';
import { useInitializeTeamId } from '@/shared/hook/common/useInitializeTeamId';

export const usePositionData = () => {
  const teamId = useInitializeTeamId();

  return $api.useQuery('get', '/api/v1/team-member/teams/{teamId}/members/position', {
    params: {
      path: {
        teamId,
      },
    },
  });
};
