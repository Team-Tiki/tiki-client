import { Button, CommandButton, useToastAction } from '@tiki/ui';

import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useQueryClient } from '@tanstack/react-query';

import InfoSetting from '@/page/workspaceSetting/component/InfoSetting';
import ProfileSetting from '@/page/workspaceSetting/component/ProfileSetting';
import TeamProfileSetting from '@/page/workspaceSetting/component/TeamProfileSetting';
import { ERROR_NAME, POSITION } from '@/page/workspaceSetting/constant';
import { usePositionData, useTeamData } from '@/page/workspaceSetting/hook/api/queries';
import { containerStyle, saveButtonStyle, workspaceDeleteButton } from '@/page/workspaceSetting/styles';
import { MemberType, TeamType } from '@/page/workspaceSetting/type';

import { $api } from '@/shared/api/client';
import { PATH } from '@/shared/constant/path';
import { useInitializeTeamId } from '@/shared/hook/common/useInitializeTeamId';
import { useCloseModal, useOpenModal } from '@/shared/store/modal';
import { Validate } from '@/shared/util/validate';

const WorkspaceSettingPage = () => {
  const [workspaceData, setWorkspaceData] = useState({
    name: '',
    position: 'MEMBER',
    teamName: '',
    university: '건국대학교',
    teamIconUrl: '',
  } as MemberType & Omit<TeamType, 'namingUpdatedAt'>);

  const [error, setError] = useState({
    nameError: ERROR_NAME.VALIDATE,
    teamNameError: ERROR_NAME.VALIDATE,
  });

  const initialData = useRef<MemberType & Omit<TeamType, 'namingUpdatedAt'>>();

  const { mutate: nameMutation } = $api.useMutation('patch', '/api/v1/team-member/teams/{teamId}/members/name');
  const { mutate: infoMutation } = $api.useMutation('patch', '/api/v1/teams/{teamId}/inform');
  const { mutate: deleteTeam } = $api.useMutation('delete', '/api/v1/teams/{teamId}');

  const { data } = usePositionData();
  const { data: teamData } = useTeamData();

  const teamId = useInitializeTeamId();
  const navigate = useNavigate();
  const { createToast } = useToastAction();
  const openModal = useOpenModal();
  const closeModal = useCloseModal();
  const queryClient = useQueryClient();

  if (data?.success && teamData?.success) {
    initialData.current = {
      name: data?.data?.name ?? '',
      position: data?.data?.position ?? 'MEMBER',
      teamName: teamData?.data?.teamName ?? '',
      university: teamData?.data?.university ?? '건국대학교',
      teamIconUrl: teamData?.data?.teamIconUrl ?? '',
    };
  }

  useEffect(() => {
    if (data?.success) {
      setWorkspaceData((prev) => ({
        ...prev,
        name: data.data?.name ?? '',
        position: data.data?.position ?? 'MEMBER',
      }));
    }
  }, [data]);

  useEffect(() => {
    if (teamData?.success) {
      setWorkspaceData((prev) => ({
        ...prev,
        teamName: teamData?.data?.teamName ?? '',
        teamIconUrl: teamData?.data?.teamIconUrl ?? '',
      }));
    }
  }, [teamData]);

  // 초기값과 수정된 데이터 비교해서 폼 제출여부 가능 여부 확인
  const canSubmit = JSON.stringify(initialData.current) !== JSON.stringify(workspaceData);

  const position = data?.data?.position;

  const handleWorkspaceDataChange = (key: string, value: string) => {
    setWorkspaceData((prev) => ({ ...prev, [key]: value }));
  };

  const handleErrorChange = (key: string, value: string) => {
    setError((prev) => ({ ...prev, [key]: value }));
  };

  const handleWorkspaceInfoSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Validate.isEmpty(workspaceData.name)) {
      handleErrorChange('nameError', ERROR_NAME.EMPTY);
      return;
    }

    if (Validate.isEmpty(workspaceData.teamName)) {
      handleErrorChange('teamNameError', ERROR_NAME.EMPTY);
      return;
    }

    nameMutation({
      body: {
        newName: workspaceData.name,
      },
      params: {
        path: {
          teamId,
        },
      },
    });

    if (workspaceData.position === POSITION.ADMIN) {
      infoMutation({
        body: { teamName: workspaceData.teamName, teamUrl: workspaceData.teamIconUrl },
        params: {
          path: {
            teamId,
          },
        },
      });
    }
  };

  const handleDelete = () => {
    if (position === 'ADMIN') {
      deleteTeam(
        { params: { path: { teamId } } },
        {
          onSuccess: () => {
            queryClient.invalidateQueries({
              queryKey: ['get', '/api/v1/members/teams'],
            });

            closeModal();

            localStorage.removeItem('teamId');

            navigate(PATH.DASHBOARD);
            window.location.reload();
          },
          onError: (error) => {
            createToast('워크스페이스 삭제 과정에서 오류가 발생했습니다', 'error');
            console.error(error);
          },
        }
      );
    }
  };

  const handleDeleteClick = () => {
    openModal('deleted', {
      title: '워크스페이스 삭제',
      content: '정말로 이 워크스페이스를 삭제하시겠습니까?',
      onClick: () => {
        handleDelete();
      },
    });
  };

  return (
    <form css={containerStyle} onSubmit={handleWorkspaceInfoSubmit}>
      <CommandButton type="submit" commandKey="S" variant="outline" css={saveButtonStyle} disabled={!canSubmit}>
        저장
      </CommandButton>

      <ProfileSetting
        name={workspaceData.name}
        position={workspaceData.position}
        onWorkspaceDataChange={handleWorkspaceDataChange}
        error={error.nameError}
        onErrorChange={handleErrorChange}
      />

      {workspaceData.position === POSITION.ADMIN && (
        <>
          <InfoSetting
            teamName={workspaceData.teamName}
            namingUpdatedAt={teamData?.data?.namingUpdatedAt ?? ''}
            onWorkspaceDataChange={handleWorkspaceDataChange}
            error={error.teamNameError}
            onErrorChange={handleErrorChange}
          />

          <TeamProfileSetting teamIconUrl={workspaceData.teamIconUrl} teamName={workspaceData.teamName} />
        </>
      )}

      <Button variant="outline" size="small" css={workspaceDeleteButton} onClick={handleDeleteClick}>
        {workspaceData.position === POSITION.ADMIN ? '워크스페이스 삭제' : '워크스페이스 탈퇴'}
      </Button>
    </form>
  );
};

export default WorkspaceSettingPage;
