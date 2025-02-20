import { CommandButton, useToastAction } from '@tiki/ui';

import { useQueryClient } from '@tanstack/react-query';

import { saveButtonStyle } from '@/page/workspaceSetting/component/WorkspaceDataSubmitButton/WorkspaceDataSubmitButton.style';
import { ERROR_NAME, POSITION } from '@/page/workspaceSetting/constant';
import { useInfoMutate, useNameMutate } from '@/page/workspaceSetting/queries';
import type { MemberType, TeamType } from '@/page/workspaceSetting/type';

import { $api } from '@/shared/api/client';
import { useInitializeTeamId } from '@/shared/hook/common/useInitializeTeamId';
import { Validate } from '@/shared/util/validate';

interface WorkspaceDataSubmitButtonProps {
  workspaceData: MemberType & Omit<TeamType, 'namingUpdatedAt'>;
  onErrorChange: (key: string, value: string) => void;
  initialWorkspaceData: (MemberType & Omit<TeamType, 'namingUpdatedAt'>) | null;
  onInitialWorkspaceDataChange: (data: (MemberType & Omit<TeamType, 'namingUpdatedAt'>) | null) => void;
}

const WorkspaceDataSubmitButton = ({
  workspaceData,
  onErrorChange,
  initialWorkspaceData,
  onInitialWorkspaceDataChange,
}: WorkspaceDataSubmitButtonProps) => {
  const teamId = useInitializeTeamId();

  const canSubmit = JSON.stringify(initialWorkspaceData) !== JSON.stringify(workspaceData);

  const nameMutation = useNameMutate(workspaceData, onInitialWorkspaceDataChange);
  const infoMutation = useInfoMutate(workspaceData, onInitialWorkspaceDataChange);

  const handleWorkspaceInfoSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (Validate.isEmpty(workspaceData.name)) {
      onErrorChange('nameError', ERROR_NAME.EMPTY);
      return;
    }

    if (Validate.isEmpty(workspaceData.teamName)) {
      onErrorChange('teamNameError', ERROR_NAME.EMPTY);
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
    <CommandButton
      type="submit"
      commandKey="S"
      variant="outline"
      css={saveButtonStyle}
      disabled={!canSubmit}
      onClick={handleWorkspaceInfoSubmit}>
      저장
    </CommandButton>
  );
};

export default WorkspaceDataSubmitButton;
