import { Button, useToastAction } from '@tiki/ui';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { axiosInstance } from '@/shared/api/instance';
import { DELETE_TIMEBLOCK } from '@/shared/constant';
import { TIMEBLOCK } from '@/shared/constant/toast';
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
  const { createToast } = useToastAction();

  const deleteBlock = async (teamId: number, timeBlockId: number) => {
    await axiosInstance.delete(`/teams/${teamId}/time-block/${timeBlockId}`);
  };

  const { mutate: deleteBlockMutate } = useMutation({
    mutationFn: ({ teamId, timeBlockId }: { teamId: number; timeBlockId: number }) => deleteBlock(teamId, timeBlockId),
    onSuccess: () => {
      closeDrawer();
      queryClient.invalidateQueries({ queryKey: ['get', '/api/v1/teams/{teamId}/timeline'] });
      createToast(TIMEBLOCK.SUCCESS.DELETE, 'success'),
        queryClient.invalidateQueries({
          queryKey: ['get', '/api/v1/notes/{teamId}'],
        });
    },
    onError: () => {
      createToast(TIMEBLOCK.ERROR.DELETE, 'error');
    },
  });

  const handleBlockDelete = () => {
    openModal('deleted', {
      title: DELETE_TIMEBLOCK.TITLE,
      content: DELETE_TIMEBLOCK.CONTENT,
      onClick: () => {
        deleteBlockMutate({ teamId, timeBlockId });

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
