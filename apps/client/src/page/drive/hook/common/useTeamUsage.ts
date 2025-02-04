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

  const convertUnit = 1024 * 1024 * 1024;

  const capacity = (data?.data?.capacity || 0) / convertUnit;
  const availableUsage = capacity - (data?.data?.usage || 0) / convertUnit;
  console.log(capacity, availableUsage);
  const modifiedCapacity = Math.floor(capacity * 100) / 100;
  const modifiedAvailableUsage = Math.floor(availableUsage * 100) / 100;

  return { modifiedAvailableUsage, modifiedCapacity, refetch };
};
