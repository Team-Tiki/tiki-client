import { $api } from '@/shared/api/client';

export const useGetInvitationInfo = (invitationId: number) => {
  return $api.useQuery('get', '/api/v1/team-invitation', {
    params: {
      query: { invitationId: +invitationId },
    },
  });
};

export const useApproveInvitation = () => {
  return $api.useMutation('post', '/api/v1/team-invitation/team-member');
};

export const useDenyInvitation = () => {
  return $api.useMutation('delete', '/api/v1/team-invitation');
};
