import { convertDataUnit } from '@/page/drive/util/convertDataUnit';

import { $api } from '@/shared/api/client';
import { useInitializeTeamId } from '@/shared/hook/common/useInitializeTeamId';

export const useTeamUsage = (
  filteredResult?: (
    | {
        documentId: number;
        name: string;
        url: string;
        capacity: number;
        createdTime: string;
        type: string;
      }
    | {
        folderId: number;
        name: string;
        createdTime: string;
        path: string;
        type: string;
      }
  )[]
) => {
  const teamId = useInitializeTeamId();

  const { data } = $api.useQuery('get', '/api/v1/teams/{teamId}/capacity', {
    params: {
      path: { teamId },
    },
    queryKey: ['team-usage', filteredResult],
  });

  const { modifiedCapacity, modifiedAvailableUsage } = convertDataUnit(data?.data);

  return { modifiedCapacity, modifiedAvailableUsage };
};
