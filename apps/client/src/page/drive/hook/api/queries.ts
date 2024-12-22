import { useToastAction } from '@tiki/ui';

import { useQueryClient } from '@tanstack/react-query';

import { components } from '@/shared/__generated__/schema';
import { $api } from '@/shared/api/client';
import { useTeamId } from '@/shared/store/team';

export type CreateFileRequest = components['schemas']['DocumentCreateRequest'];

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
  const { createToast } = useToastAction();

  const queryClient = useQueryClient();

  return $api.useMutation('post', '/api/v1/teams/{teamId}/documents', {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/v1/teams/{teamId}/drive'] });
    },
    onError: () => {
      createToast('실패', 'error');
    },
  });
};
