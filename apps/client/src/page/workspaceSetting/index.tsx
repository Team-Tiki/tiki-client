import { useEffect, useState } from 'react';

import InfoSetting from '@/page/workspaceSetting/component/InfoSetting';
import ProfileSetting from '@/page/workspaceSetting/component/ProfileSetting';
import TeamProfileSetting from '@/page/workspaceSetting/component/TeamProfileSetting';
import WorkspaceDataSubmitButton from '@/page/workspaceSetting/component/WorkspaceDataSubmitButton/WorkspaceDataSubmitButton';
import WorkspaceDelete from '@/page/workspaceSetting/component/WorkspaceDelete';
import { ERROR_NAME, POSITION } from '@/page/workspaceSetting/constant';
import { usePositionData, useTeamData } from '@/page/workspaceSetting/hook/api/queries';
import { containerStyle } from '@/page/workspaceSetting/styles';
import { MemberType, TeamType } from '@/page/workspaceSetting/type';

const WorkspaceSettingPage = () => {
  const [workspaceData, setWorkspaceData] = useState({
    name: '',
    position: 'MEMBER',
    teamName: '',
    university: '건국대학교',
    teamIconUrl: '',
  } as MemberType & Omit<TeamType, 'namingUpdatedAt'>);

  const [initialWorkspaceData, setInitialWorkspaceData] = useState<
    (MemberType & Omit<TeamType, 'namingUpdatedAt'>) | null
  >(null);

  const [error, setError] = useState({
    nameError: ERROR_NAME.VALIDATE,
    teamNameError: ERROR_NAME.VALIDATE,
  });

  const { data: positionData } = usePositionData();
  const { data: teamData } = useTeamData();

  useEffect(() => {
    if (positionData?.success && teamData?.success && !initialWorkspaceData) {
      setInitialWorkspaceData({
        name: positionData.data?.name ?? '',
        position: positionData.data?.position ?? 'MEMBER',
        teamName: teamData.data?.teamName ?? '',
        university: teamData.data?.university ?? '건국대학교',
        teamIconUrl: teamData.data?.teamIconUrl ?? '',
      });
    }
  }, [positionData, teamData, initialWorkspaceData]);

  useEffect(() => {
    if (positionData?.success) {
      setWorkspaceData((prev) => ({
        ...prev,
        name: positionData.data?.name ?? '',
        position: positionData.data?.position ?? 'MEMBER',
      }));
    }
  }, [positionData]);

  useEffect(() => {
    if (teamData?.success) {
      setWorkspaceData((prev) => ({
        ...prev,
        teamName: teamData?.data?.teamName ?? '',
        teamIconUrl: teamData?.data?.teamIconUrl ?? '',
      }));
    }
  }, [teamData]);

  const handleWorkspaceDataChange = (key: string, value: string) => {
    setWorkspaceData((prev) => ({ ...prev, [key]: value }));
  };

  const handleErrorChange = (key: string, value: string) => {
    setError((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <>
      <form css={containerStyle}>
        <WorkspaceDataSubmitButton
          workspaceData={workspaceData}
          onErrorChange={handleErrorChange}
          initialWorkspaceData={initialWorkspaceData}
        />
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

            <TeamProfileSetting
              teamIconUrl={workspaceData.teamIconUrl}
              teamName={workspaceData.teamName}
              onWorkspaceDataChange={handleWorkspaceDataChange}
            />
          </>
        )}
      </form>

      <WorkspaceDelete position={workspaceData.position} />
    </>
  );
};

export default WorkspaceSettingPage;
