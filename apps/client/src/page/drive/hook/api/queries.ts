import { useToastAction } from '@tiki/ui';

import { useQueryClient } from '@tanstack/react-query';

import { components } from '@/shared/__generated__/schema';
import { $api } from '@/shared/api/client';
import { useInitializeTeamId } from '@/shared/hook/common/useInitializeTeamId';

export type CreateFileRequest = components['schemas']['DocumentCreateRequest'];

export const useDriveData = (folderId?: number | null) => {
  const teamId = useInitializeTeamId();

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

export const useUploadFile = (folderId?: number | null) => {
  const { createToast } = useToastAction();

  const queryClient = useQueryClient();
  const teamId = useInitializeTeamId();

  return $api.useMutation('post', '/api/v1/teams/{teamId}/documents', {
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['get', '/api/v1/teams/{teamId}/drive', { params: { path: { teamId }, query: { folderId } } }],
      });
    },
    onError: () => {
      createToast('실패', 'error');
    },
  });
};
