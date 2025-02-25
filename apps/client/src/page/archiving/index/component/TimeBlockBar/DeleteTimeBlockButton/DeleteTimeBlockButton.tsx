import { Button } from '@tiki/ui';

import { useQueryClient } from '@tanstack/react-query';

import { $api } from '@/shared/api/client';
import { DELETE_TIMEBLOCK } from '@/shared/constant';
import { useInitializeTeamId } from '@/shared/hook/common/useInitializeTeamId';
import { useDrawerAction } from '@/shared/store/drawer';
import { useCloseModal, useOpenModal } from '@/shared/store/modal';
import { useTimeBlockId } from '@/shared/store/timeBlockId';

const DeleteTimeBlockButton = () => {
  const closeModal = useCloseModal();
  const openModal = useOpenModal();
  const timeBlockId = useTimeBlockId();
  const teamId = useInitializeTeamId();
  const queryClient = useQueryClient();
  const { closeDrawer } = useDrawerAction();

  const { mutate: deleteBlockMutate } = $api.useMutation('delete', '/api/v1/teams/{teamId}/time-block/{timeBlockId}');

  const handleBlockDelete = () => {
    openModal('deleted', {
      title: DELETE_TIMEBLOCK.TITLE,
      content: DELETE_TIMEBLOCK.CONTENT,
      onClick: () => {
        deleteBlockMutate(
          {
            params: {
              path: {
                teamId,
                timeBlockId,
              },
            },
          },
          {
            onSuccess: () => {
              closeDrawer();
              queryClient.invalidateQueries({ queryKey: ['get', '/api/v1/teams/{teamId}/timeline'] });
            },
          }
        );

        closeModal();
      },
    });
  };
  return (
    <Button variant="tertiary" size="small" onClick={handleBlockDelete}>
      삭제
    </Button>
  );
};

export default DeleteTimeBlockButton;
