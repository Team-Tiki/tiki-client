import { $api } from '@/shared/api/client';
import { useTeamId } from '@/shared/store/team';

export const useDeleteTrashData = (docList: number[]) => {
  const teamId = useTeamId();

  return $api.useQuery('delete', '/api/v1/teams/{teamId}/trash', {
    params: {
      path: {
        teamId,
      },
      query: {
        documentId: docList,
      },
    },
  });
};

export const useRestoreTrashData = (docList: number[]) => {
  const teamId = useTeamId();

  return $api.useQuery('post', '/api/v1/teams/{teamId}/trash', {
    params: {
      path: {
        teamId,
      },
      query: {
        documentId: docList,
      },
    },
  });
};
