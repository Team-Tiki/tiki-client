import { Button, CommandButton, Flex, Text, useToastAction } from '@tiki/ui';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useQueryClient } from '@tanstack/react-query';

import InfoSetting from '@/page/workspaceSetting/component/InfoSetting';
import ProfileSetting from '@/page/workspaceSetting/component/ProfileSetting';
import { ERROR_NAME, POSITION } from '@/page/workspaceSetting/constant';
import { usePositionData } from '@/page/workspaceSetting/hook/api/queries';
import {
  containerStyle,
  saveButtonStyle,
  teamImageTextStyle,
  workspaceDeleteButton,
} from '@/page/workspaceSetting/styles';
import { MemberType } from '@/page/workspaceSetting/type';

import { $api } from '@/shared/api/client';
import { PATH } from '@/shared/constant/path';
import { useInitializeTeamId } from '@/shared/hook/common/useInitializeTeamId';
import { useCloseModal, useOpenModal } from '@/shared/store/modal';
import { Validate } from '@/shared/util/validate';

const WorkspaceSettingPage = () => {
  const [workspaceData, setWorkspaceData] = useState({
    name: '',
    position: 'MEMBER',
    workspaceName: '',
    collegeName: '',
    teamImage: '',
  } as MemberType & {
    workspaceName: string;
    collegeName: string;
    teamImage: string;
  });

  const [error, setError] = useState({
    nicknameError: ERROR_NAME.VALIDATE,
    workspaceNameError: ERROR_NAME.VALIDATE,
  });

  const navigate = useNavigate();

  const { createToast } = useToastAction();
  const teamId = useInitializeTeamId();

  const openModal = useOpenModal();
  const closeModal = useCloseModal();

  const queryClient = useQueryClient();

  const { mutate: deleteTeam } = $api.useMutation('delete', '/api/v1/teams/{teamId}');
  const { data } = usePositionData();
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
      handleErrorChange('nicknameError', ERROR_NAME.EMPTY);
      return;
    }

    if (Validate.isEmpty(workspaceData.workspaceName)) {
      handleErrorChange('workspaceNameError', ERROR_NAME.EMPTY);
      return;
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

  useEffect(() => {
    if (data?.success) {
      setWorkspaceData((prev) => ({
        ...prev,
        name: data.data?.name ?? '',
        position: data.data?.position ?? 'MEMBER',
      }));
    }
  }, [data]);

  return (
    <form css={containerStyle} onSubmit={handleWorkspaceInfoSubmit}>
      <CommandButton type="submit" commandKey="S" variant="outline" css={saveButtonStyle}>
        저장
      </CommandButton>

      <ProfileSetting
        name={workspaceData.name}
        position={workspaceData.position}
        onWorkspaceDataChange={handleWorkspaceDataChange}
        error={error.nicknameError}
        onErrorChange={handleErrorChange}
      />

      {workspaceData.position === POSITION.ADMIN && (
        <>
          <InfoSetting
            workspaceName={workspaceData.workspaceName}
            onWorkspaceDataChange={handleWorkspaceDataChange}
            error={error.workspaceNameError}
            onErrorChange={handleErrorChange}
          />
          <Flex styles={{ direction: 'column', gap: '1.2rem' }}>
            <Flex styles={{ direction: 'column', gap: '0.4rem' }}>
              <Text tag="body6">팀 대표 이미지</Text>
              <Text tag="body9" css={teamImageTextStyle}>
                최소 360x360px 크기의 PNG 혹은 JPG 파일만 업로드 가능합니다.
              </Text>
            </Flex>
          </Flex>
        </>
      )}

      <Button variant="outline" size="small" css={workspaceDeleteButton} onClick={handleDeleteClick}>
        {workspaceData.position === POSITION.ADMIN ? '워크스페이스 삭제' : '워크스페이스 탈퇴'}
      </Button>
    </form>
  );
};

export default WorkspaceSettingPage;
