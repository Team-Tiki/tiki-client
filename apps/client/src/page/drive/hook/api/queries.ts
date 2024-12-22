import { $api } from '@/shared/api/client';
import { useTeamId } from '@/shared/store/team';

export const useDriveData = (folderId?: number | null) => {
  const teamId = useTeamId();

  if (folderId === null) folderId = undefined;

  return $api.useQuery('get', '/api/v1/teams/{teamId}/drive', {
    params: {
      path: {
        teamId,
      },
      query: {
        folderId,
      },
    },
  });
};

export const useUploadFile = () => {
  return $api.useMutation('post', '/api/v1/teams/{teamId}/documents');
};
