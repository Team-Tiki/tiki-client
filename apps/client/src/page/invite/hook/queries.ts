import { $api } from '@/shared/api/client';

export const useInvitationInfo = (invitationId: number) => {
  return $api.useQuery('get', '/api/v1/team-invitation', {
    params: {
      query: { invitationId: +invitationId },
    },
  });
};
