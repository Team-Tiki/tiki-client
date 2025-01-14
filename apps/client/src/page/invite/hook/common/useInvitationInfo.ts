import { useSearchParams } from 'react-router-dom';

import { useGetInvitationInfo } from '@/page/invite/hook/queries';

import { INVITATION_ID } from '@/shared/constant/api';

export const useInvitationInfo = () => {
  const [searchParams] = useSearchParams();
  const invitationId = searchParams.get('invitationId') || localStorage.getItem(INVITATION_ID) || '';

  const { data, isFetched, isLoading } = useGetInvitationInfo(+invitationId);

  if (isLoading) {
    console.log('로딩중');
  }

  if (isFetched && data) {
    localStorage.setItem(INVITATION_ID, invitationId);
  }

  return { data, invitationId };
};
