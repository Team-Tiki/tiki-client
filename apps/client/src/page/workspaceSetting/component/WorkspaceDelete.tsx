import { Button, useToastAction } from '@tiki/ui';

import { useNavigate } from 'react-router-dom';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { POSITION } from '@/page/workspaceSetting/constant';
import { workspaceDeleteButton } from '@/page/workspaceSetting/styles';

import { axiosInstance } from '@/shared/api/instance';
import { STORAGE_KEY } from '@/shared/constant/api';
import { PATH } from '@/shared/constant/path';
import { useInitializeTeamId } from '@/shared/hook/common/useInitializeTeamId';
import { useCloseModal, useOpenModal } from '@/shared/store/modal';

interface WorkspaceDeleteProps {
  position: keyof typeof POSITION;
}

const WorkspaceDelete = ({ position }: WorkspaceDeleteProps) => {
  const deleteTeam = async (teamId: number) => {
    await axiosInstance.delete(`/teams/${teamId}`);
  };

  const leaveTeam = async (teamId: number) => {
    await axiosInstance.delete(`/team-member/teams/${teamId}/leave`);
  };

  const { mutate: deleteTeamMutate } = useMutation({
    mutationFn: ({ teamId }: { teamId: number }) => deleteTeam(teamId),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['get', '/api/v1/members/teams'],
      });
      closeModal();

      localStorage.removeItem(STORAGE_KEY.TEAM_ID);
      localStorage.removeItem(STORAGE_KEY.TEAM_NAME);

      navigate(PATH.DASHBOARD);
    },
    onError: () => {
      createToast(`워크스페이스 ${TYPE} 과정에서 오류가 발생했습니다`, 'error');
    },
  });

  const { mutate: leaveTeamMutate } = useMutation({
    mutationFn: ({ teamId }: { teamId: number }) => leaveTeam(teamId),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['get', '/api/v1/members/teams'],
      });
      closeModal();

      localStorage.removeItem(STORAGE_KEY.TEAM_ID);
      localStorage.removeItem(STORAGE_KEY.TEAM_NAME);

      navigate(PATH.DASHBOARD);
    },
    onError: () => {
      createToast(`워크스페이스 ${TYPE} 과정에서 오류가 발생했습니다`, 'error');
    },
  });

  const navigate = useNavigate();
  const { createToast } = useToastAction();
  const openModal = useOpenModal();
  const closeModal = useCloseModal();
  const queryClient = useQueryClient();
  const teamId = useInitializeTeamId();

  const TYPE = position === POSITION.ADMIN ? '삭제' : '탈퇴';

  const handleDelete = () => {
    if (position === POSITION.ADMIN) {
      deleteTeamMutate({ teamId });
    }

    if (position === POSITION.EXECUTIVE) {
      leaveTeamMutate({ teamId });
    }
  };

  const handleDeleteClick = () => {
    openModal(position === POSITION.ADMIN ? 'deleted' : 'leave', {
      title: `워크스페이스 ${TYPE}`,
      content: `정말로 이 워크스페이스를 ${TYPE}하시겠습니까?`,
      onClick: () => {
        handleDelete();
      },
    });
  };

  return (
    <Button variant="outline" size="small" css={workspaceDeleteButton} onClick={handleDeleteClick}>
      {position === POSITION.ADMIN ? '워크스페이스 삭제' : '워크스페이스 탈퇴'}
    </Button>
  );
};

export default WorkspaceDelete;
