import { Button, CommandButton, Flex, Text } from '@tiki/ui';

import { useEffect, useState } from 'react';

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
    namingUpdatedAt: '',
  } as MemberType & TeamType);

  const { mutate: nameMutation } = $api.useMutation('patch', '/api/v1/team-member/teams/{teamId}/members/name');

  const { mutate: infoMutation } = $api.useMutation('patch', '/api/v1/teams/{teamId}/inform');

  const { data } = usePositionData();

  const { data: teamData } = useTeamData();

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
          body: { teamName: 'aaa', teamUrl: '' },
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
            teamName={workspaceData.teamName}
            namingUpdatedAt={workspaceData.namingUpdatedAt}
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

      <Button variant="outline" size="small" css={workspaceDeleteButton}>
        {workspaceData.position === POSITION.ADMIN ? '워크스페이스 삭제' : '워크스페이스 탈퇴'}
      </Button>
    </form>
  );
};

export default WorkspaceSettingPage;
