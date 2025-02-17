import InfoSetting from '@/page/workspaceSetting/component/InfoSetting';
import ProfileSetting from '@/page/workspaceSetting/component/ProfileSetting';
import TeamProfileSetting from '@/page/workspaceSetting/component/TeamProfileSetting';
import WorkspaceDataSubmitButton from '@/page/workspaceSetting/component/WorkspaceDataSubmitButton/WorkspaceDataSubmitButton';
import WorkspaceDelete from '@/page/workspaceSetting/component/WorkspaceDelete';
import { POSITION } from '@/page/workspaceSetting/constant';
import { useWorkspaceData } from '@/page/workspaceSetting/hook/useWorkspaceData';
import { containerStyle } from '@/page/workspaceSetting/styles';

const WorkspaceSettingPage = () => {
  const {
    workspaceData,
    initialWorkspaceData,
    handleWorkspaceDataChange,
    namingUpdatedAt,
    workspaceDataError,
    handleWorkspaceDataErrorChange,
  } = useWorkspaceData();

  return (
    <>
      <form css={containerStyle}>
        <WorkspaceDataSubmitButton
          workspaceData={workspaceData}
          onErrorChange={handleWorkspaceDataErrorChange}
          initialWorkspaceData={initialWorkspaceData}
        />
        <ProfileSetting
          name={workspaceData.name}
          position={workspaceData.position}
          onWorkspaceDataChange={handleWorkspaceDataChange}
          error={workspaceDataError.nameError}
          onErrorChange={handleWorkspaceDataErrorChange}
        />

        {workspaceData.position === POSITION.ADMIN && (
          <>
            <InfoSetting
              teamName={workspaceData.teamName}
              namingUpdatedAt={namingUpdatedAt ?? ''}
              onWorkspaceDataChange={handleWorkspaceDataChange}
              error={workspaceDataError.teamNameError}
              onErrorChange={handleWorkspaceDataErrorChange}
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
