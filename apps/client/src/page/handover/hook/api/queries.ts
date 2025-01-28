import { $api } from '@/shared/api/client';
import { useInitializeTeamId } from '@/shared/hook/common/useInitializeTeamId';

export const useNoteData = (createdAt: string, sortOrder?: 'ASC' | 'DESC') => {
  const teamId = useInitializeTeamId();

  return $api.useQuery('get', '/api/v1/notes/{teamId}', {
    params: {
      path: {
        teamId,
      },
      query: {
        createdAt: createdAt || '',
        sortOrder: sortOrder || 'ASC',
      },
    },
  });
};
