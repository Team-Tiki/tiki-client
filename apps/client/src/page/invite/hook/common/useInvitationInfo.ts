import { useSearchParams } from 'react-router-dom';

import { useGetInvitationInfo } from '@/page/invite/hook/queries';

import { STORAGE_KEY } from '@/shared/constant/api';

export const useInvitationInfo = () => {
  const [searchParams] = useSearchParams();
  const invitationId = searchParams.get('invitationId') || localStorage.getItem(STORAGE_KEY.INVITATION_ID) || '';
  const inviteTeamId = searchParams.get('teamId') || localStorage.getItem(STORAGE_KEY.INVITE_TEAM_ID) || '';
  localStorage.setItem(STORAGE_KEY.INVITATION_ID, invitationId);
  localStorage.setItem(STORAGE_KEY.INVITE_TEAM_ID, inviteTeamId);

  const { data, failureCount } = useGetInvitationInfo(+invitationId);

  return { data, invitationId, failureCount };
};
