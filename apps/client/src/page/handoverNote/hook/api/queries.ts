import { useParams } from 'react-router-dom';

import { $api } from '@/shared/api/client';
import { useInitializeTeamId } from '@/shared/hook/common/useInitializeTeamId';

export const useNoteDetailData = () => {
  const teamId = useInitializeTeamId();
  const { noteId } = useParams();

  return $api.useSuspenseQuery('get', '/api/v1/notes/{teamId}/{noteId}', {
    params: {
      path: {
        teamId,
        noteId: parseInt(noteId!),
      },
    },
  });
};
