import { useToastAction } from '@tiki/ui';

import { useQueryClient } from '@tanstack/react-query';

import { POSITION } from '@/page/workspaceSetting/constant';
import type { MemberType, TeamType } from '@/page/workspaceSetting/type';

import { $api } from '@/shared/api/client';

export const useNameMutate = (
  workspaceData: MemberType & Omit<TeamType, 'namingUpdatedAt'>,
  onInitialWorkspaceDataChange: (data: (MemberType & Omit<TeamType, 'namingUpdatedAt'>) | null) => void
) => {
  const queryClient = useQueryClient();
  const { createToast } = useToastAction();

  const { mutate: nameMutation } = $api.useMutation('patch', '/api/v1/team-member/teams/{teamId}/members/name', {
    onSuccess: () => {
      if (workspaceData.position === POSITION.EXECUTIVE) {
        createToast('변경사항이 저장되었습니다.', 'success');
        onInitialWorkspaceDataChange({ ...workspaceData });
      }
      queryClient.invalidateQueries({ queryKey: ['get', '/api/v1/team-member/teams/{teamId}/members/position'] });
    },
  });

  return nameMutation;
};

export const useInfoMutate = (
  workspaceData: MemberType & Omit<TeamType, 'namingUpdatedAt'>,
  onInitialWorkspaceDataChange: (data: (MemberType & Omit<TeamType, 'namingUpdatedAt'>) | null) => void
) => {
  const queryClient = useQueryClient();
  const { createToast } = useToastAction();

  const { mutate: infoMutation } = $api.useMutation('patch', '/api/v1/teams/{teamId}/inform', {
    onSuccess: () => {
      onInitialWorkspaceDataChange({ ...workspaceData });
      queryClient.invalidateQueries({
        queryKey: ['get', '/api/v1/members/teams'],
      });
      queryClient.invalidateQueries({
        queryKey: ['get', '/api/v1/teams/{teamId}/inform'],
      });
      createToast('변경사항이 저장되었습니다.', 'success');
    },
  });

  return infoMutation;
};
