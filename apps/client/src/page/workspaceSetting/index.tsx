import { Button, CommandButton, Flex, Text } from '@tiki/ui';

import { useEffect, useRef, useState } from 'react';

import InfoSetting from '@/page/workspaceSetting/component/InfoSetting';
import ProfileSetting from '@/page/workspaceSetting/component/ProfileSetting';
import { ERROR_NAME, POSITION } from '@/page/workspaceSetting/constant';
import {
  containerStyle,
  saveButtonStyle,
  teamImageStyle,
  teamImageTextStyle,
  workspaceDeleteButton,
} from '@/page/workspaceSetting/styles';
import { MemberType } from '@/page/workspaceSetting/type';

import { $api } from '@/shared/api/client';
import { useInitializeTeamId } from '@/shared/hook/common/useInitializeTeamId';
import { Validate } from '@/shared/util/validate';

const WorkspaceSettingPage = () => {
  const teamId = useInitializeTeamId();

  useRef();

  const { data } = $api.useQuery('get', '/api/v1/team-member/teams/{teamId}/members/position', {
    params: {
      path: {
        teamId,
      },
    },
  });

  // 추후 워크스페이스 api 붙일때 타입 수정 예정
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

  useEffect(() => {
    if (data) {
      setWorkspaceData((prev) => ({
        ...prev,
        name: data.data?.name ?? '',
        position: data.data?.position ?? 'MEMBER',
      }));
    }
  }, [data]);

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

    if (Validate.isEmpty(workspaceData.workspaceName)) {
      handleErrorChange('workspaceNameError', ERROR_NAME.EMPTY);
      return;
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

            <Flex styles={{ align: 'center', gap: '1.2rem' }}>
              {workspaceData.teamImage ? (
                <img src={workspaceData.teamImage} alt="팀 대표" css={teamImageStyle} />
              ) : (
                <Flex styles={{ justify: 'center', align: 'center' }} css={[teamImageStyle, teamImageTextStyle]}>
                  {workspaceData.workspaceName[0]}
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
