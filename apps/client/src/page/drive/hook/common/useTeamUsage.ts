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

  const convertUnit = 1024 * 1024;

  const capacity = (data?.data?.capacity || 0) / convertUnit / convertUnit;
  const availableUsage = capacity - (data?.data?.usage || 0) / convertUnit;

  const modifiedCapacity = Math.floor(capacity * 1000) / 1000;
  const modifiedAvailableUsage = Math.ceil(availableUsage * 1000) / 1000;

  return { modifiedAvailableUsage, modifiedCapacity, refetch };
};
