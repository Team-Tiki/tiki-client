import { $api } from '@/shared/api/client';
import { useInitializeTeamId } from '@/shared/hook/common/useInitializeTeamId';

export const useNoteDetailData = (noteId: number) => {
  const teamId = useInitializeTeamId();

  return $api.useQuery('get', '/api/v1/notes/{teamId}/{noteId}', {
    params: {
      path: {
        teamId,
        noteId,
      },
    },
  });
};
