import { $api } from '@/shared/api/client';
import { useTeamId } from '@/shared/store/team';

export const useNoteData = (createdAt: string, sortOrder?: 'ASC' | 'DESC') => {
  const teamId = useTeamId();

  return $api.useQuery('get', '/api/v1/notes/{teamId}', {
    params: {
      path: {
        teamId,
      },
      query: {
        createdAt,
        sortOrder: sortOrder || 'DESC',
      },
    },
  });
};
