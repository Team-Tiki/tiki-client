import { CommandButton } from '@tiki/ui';

import { useQueryClient } from '@tanstack/react-query';

import { saveButtonStyle } from '@/page/workspaceSetting/component/WorkspaceDataSubmitButton/WorkspaceDataSubmitButton.style';
import { ERROR_NAME, POSITION } from '@/page/workspaceSetting/constant';
import type { MemberType, TeamType } from '@/page/workspaceSetting/type';

import { $api } from '@/shared/api/client';
import { useInitializeTeamId } from '@/shared/hook/common/useInitializeTeamId';
import { Validate } from '@/shared/util/validate';

interface WorkspaceDataSubmitButtonProps {
  workspaceData: MemberType & Omit<TeamType, 'namingUpdatedAt'>;
  onErrorChange: (key: string, value: string) => void;
  initialWorkspaceData: (MemberType & Omit<TeamType, 'namingUpdatedAt'>) | null;
}

const WorkspaceDataSubmitButton = ({
  workspaceData,
  onErrorChange,
  initialWorkspaceData,
}: WorkspaceDataSubmitButtonProps) => {
  const queryClient = useQueryClient();
  const teamId = useInitializeTeamId();

  const canSubmit = JSON.stringify(initialWorkspaceData) !== JSON.stringify(workspaceData);

  const { mutate: nameMutation } = $api.useMutation('patch', '/api/v1/team-member/teams/{teamId}/members/name');
  const { mutate: infoMutation } = $api.useMutation('patch', '/api/v1/teams/{teamId}/inform');

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
          queryClient.invalidateQueries({ queryKey: ['get', '/api/v1/team-member/teams/{teamId}/members/position'] });
        },
      }
    );

    if (workspaceData.position === POSITION.ADMIN) {
      infoMutation(
        {
          body: {
            teamName: workspaceData.teamName,
            teamUrl: workspaceData.teamIconUrl,
          },
          params: {
            path: {
              teamId,
            },
          },
        },
        {
          onSuccess: () => {
            queryClient.invalidateQueries({
              queryKey: ['get', '/api/v1/members/teams'],
            });
            queryClient.invalidateQueries({
              queryKey: ['get', '/api/v1/teams/{teamId}/inform'],
            });
          },
        }
      );
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
