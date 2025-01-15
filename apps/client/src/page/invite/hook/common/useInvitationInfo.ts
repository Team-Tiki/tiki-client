import { useSearchParams } from 'react-router-dom';

import { useGetInvitationInfo } from '@/page/invite/hook/queries';

import { INVITATION_ID, INVITE_TEAM_ID } from '@/shared/constant/api';

export const useInvitationInfo = () => {
  const [searchParams] = useSearchParams();
  const invitationId = searchParams.get('invitationId') || localStorage.getItem(INVITATION_ID) || '';
  const inviteTeamId = searchParams.get('teamId') || localStorage.getItem(INVITE_TEAM_ID) || '';
  localStorage.setItem(INVITATION_ID, invitationId);
  localStorage.setItem(INVITE_TEAM_ID, inviteTeamId);

  const { data } = useGetInvitationInfo(+invitationId);

  return { data, invitationId };
};
