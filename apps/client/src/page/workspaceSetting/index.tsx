import { CommandButton } from '@tiki/ui';

import { useEffect, useRef, useState } from 'react';

import InfoSetting from '@/page/workspaceSetting/component/InfoSetting';
import ProfileSetting from '@/page/workspaceSetting/component/ProfileSetting';
import TeamProfileSetting from '@/page/workspaceSetting/component/TeamProfileSetting';
import WorkspaceDelete from '@/page/workspaceSetting/component/WorkspaceDelete';
import { ERROR_NAME, POSITION } from '@/page/workspaceSetting/constant';
import { usePositionData, useTeamData } from '@/page/workspaceSetting/hook/api/queries';
import { containerStyle, saveButtonStyle } from '@/page/workspaceSetting/styles';
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

  const [error, setError] = useState({
    nameError: ERROR_NAME.VALIDATE,
    teamNameError: ERROR_NAME.VALIDATE,
  });

  const initialData = useRef<MemberType & Omit<TeamType, 'namingUpdatedAt'>>();

  const { mutate: nameMutation } = $api.useMutation('patch', '/api/v1/team-member/teams/{teamId}/members/name');
  const { mutate: infoMutation } = $api.useMutation('patch', '/api/v1/teams/{teamId}/inform');

  const { data } = usePositionData();
  const { data: teamData } = useTeamData();

  const teamId = useInitializeTeamId();

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
        body: {
          teamName: workspaceData.teamName,
          teamUrl: workspaceData.teamIconUrl,
        },
        params: {
          path: {
            teamId,
          },
        },
      });
    }
  };

  return (
    <>
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
      </form>

      <WorkspaceDelete position={workspaceData.position} />
    </>
  );
};

export default WorkspaceSettingPage;
