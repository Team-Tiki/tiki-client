import { convertDataUnit } from '@/page/drive/util/convertDataUnit';

import { $api } from '@/shared/api/client';
import { useInitializeTeamId } from '@/shared/hook/common/useInitializeTeamId';

export const useTeamUsage = () => {
  const teamId = useInitializeTeamId();

  const { data, refetch } = $api.useQuery('get', '/api/v1/teams/{teamId}/capacity', {
    params: {
      path: {
        teamId,
      },
    },
  });

  const { modifiedCapacity, modifiedAvailableUsage } = convertDataUnit(data?.data);

  return { modifiedCapacity, modifiedAvailableUsage, refetch };
};
