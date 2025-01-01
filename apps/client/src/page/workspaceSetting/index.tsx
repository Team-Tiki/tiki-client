import { Button, CommandButton, Flex, Text } from '@tiki/ui';

import { useEffect, useRef, useState } from 'react';

import InfoSetting from '@/page/workspaceSetting/component/InfoSetting';
import ProfileSetting from '@/page/workspaceSetting/component/ProfileSetting';
import { ERROR_NAME, POSITION } from '@/page/workspaceSetting/constant';
import { usePositionData, useTeamData } from '@/page/workspaceSetting/hook/api/queries';
import {
  containerStyle,
  saveButtonStyle,
  teamImageStyle,
  teamImageTextStyle,
  workspaceDeleteButton,
} from '@/page/workspaceSetting/styles';
import { MemberType, TeamType } from '@/page/workspaceSetting/type';

import { $api } from '@/shared/api/client';
import { useInitializeTeamId } from '@/shared/hook/common/useInitializeTeamId';
import { Validate } from '@/shared/util/validate';

const WorkspaceSettingPage = () => {
  const [workspaceData, setWorkspaceData] = useState({
    name: '',
    position: 'MEMBER',
    teamName: '',
    university: '건국대학교',
    teamIconUrl: '',
  } as MemberType & Omit<TeamType, 'namingUpdatedAt'>);

  const { mutate: nameMutation } = $api.useMutation('patch', '/api/v1/team-member/teams/{teamId}/members/name');

  const { mutate: infoMutation } = $api.useMutation('patch', '/api/v1/teams/{teamId}/inform');

  const { mutate: teamDeleteMutation } = $api.useMutation('delete', '/api/v1/teams/{teamId}');

  const { mutate: teamLeaveMutation } = $api.useMutation('delete', '/api/v1/team-member/teams/{teamId}/leave');

  const { data } = usePositionData();

  const { data: teamData } = useTeamData();

  const initialData = useRef<MemberType & Omit<TeamType, 'namingUpdatedAt'>>();

  if (data?.success && teamData?.success) {
    initialData.current = {
      name: data?.data?.name ?? '',
      position: data?.data?.position ?? 'MEMBER',
      teamName: teamData?.data?.teamName ?? '',
      university: teamData?.data?.university ?? '건국대학교',
      teamIconUrl: teamData?.data?.teamIconUrl ?? '',
    };
  }

  // 초기값과 수정된 데이터 비교해서 폼 제출여부 가능 여부 확인
  const isSubmitable = JSON.stringify(initialData.current) !== JSON.stringify(workspaceData);

  const teamId = useInitializeTeamId();

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

  const [error, setError] = useState({
    nicknameError: ERROR_NAME.VALIDATE,
    workspaceNameError: ERROR_NAME.VALIDATE,
  });

  const handleWorkspaceDataChange = (key: string, value: string) => {
    setWorkspaceData((prev) => (prev = { ...prev, [key]: value }));
  };

  const handleErrorChange = (key: string, value: string) => {
    setError((prev) => (prev = { ...prev, [key]: value }));
  };

  const handleWorkspaceInfoSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Validate.isEmpty(workspaceData.name)) {
      handleErrorChange('nicknameError', ERROR_NAME.EMPTY);
      return;
    }

    if (Validate.isEmpty(workspaceData.teamName)) {
      handleErrorChange('workspaceNameError', ERROR_NAME.EMPTY);
      return;
    }

    nameMutation(
      {
        body: {
          newName: workspaceData.name,
        },
        params: {
          path: {
            teamId,
          },
        },
      },
      {
        onSuccess: () => {
          console.log('이름 변경 성공');
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );

    if (workspaceData.position === POSITION.ADMIN) {
      infoMutation(
        {
          body: { teamName: workspaceData.teamName, teamUrl: workspaceData.teamIconUrl },
          params: {
            path: {
              teamId,
            },
          },
        },
        {
          onSuccess: () => {
            console.log('팀 정보 변경 성공');
          },
          onError: (error) => {
            console.log(error);
          },
        }
      );
    }
  };

  const handleDeleteClick = () => {
    if (workspaceData.position === POSITION.ADMIN) {
      teamDeleteMutation(
        {
          params: {
            path: {
              teamId,
            },
          },
        },
        {
          onSuccess: () => {
            console.log('팀 삭제 성공');
          },
        }
      );
      return;
    }

    teamLeaveMutation(
      {
        params: {
          path: {
            teamId,
          },
        },
      },
      {
        onSuccess: () => {
          console.log('팀 탈퇴 성공');
        },
      }
    );
  };

  return (
    <form css={containerStyle} onSubmit={handleWorkspaceInfoSubmit}>
      <CommandButton type="submit" commandKey="S" variant="outline" css={saveButtonStyle} disabled={!isSubmitable}>
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
            teamName={workspaceData.teamName}
            namingUpdatedAt={teamData?.data?.namingUpdatedAt ?? ''}
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

            <Flex styles={{ align: 'center', gap: '1.2rem' }}>
              {workspaceData.teamIconUrl ? (
                <img src={workspaceData.teamIconUrl} alt="팀 대표" css={teamImageStyle} />
              ) : (
                <Flex styles={{ justify: 'center', align: 'center' }} css={[teamImageStyle, teamImageTextStyle]}>
                  {workspaceData.teamName[0]}
                </Flex>
              )}
              <Flex styles={{ gap: '0.4rem' }}>
                <Button variant="outline" size="small">
                  삭제
                </Button>
                <Button variant="outline" size="small">
                  업로드
                </Button>
              </Flex>
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
