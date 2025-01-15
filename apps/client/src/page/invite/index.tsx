import { LogoTikiSm } from '@tiki/icon';
import { Button, Flex, Heading, Text, theme, useToastAction } from '@tiki/ui';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useInvitationInfo } from '@/page/invite/hook/common/useInvitationInfo';
import { useApproveInvitation, useDenyInvitation } from '@/page/invite/hook/queries';
import { firstSpellStyle, inviteStyle } from '@/page/invite/index.styles';
import { InvitationType } from '@/page/invite/type';

import { components } from '@/shared/__generated__/schema';
import { ACCESS_TOKEN_KEY, INVITATION_ID, INVITE_TEAM_ID } from '@/shared/constant/api';
import { PATH } from '@/shared/constant/path';

const InvitedPage = () => {
  const isLogined = !!localStorage.getItem(ACCESS_TOKEN_KEY);

  const { createToast } = useToastAction();

  const [invitationInfo, setInvitationInfo] = useState<InvitationType>();
  const [teamId, setTeamId] = useState<number>(0);

  const navigate = useNavigate();

  const { data, invitationId } = useInvitationInfo();
  const { mutate: approveMutate } = useApproveInvitation();
  const { mutate: denyMutate } = useDenyInvitation();

  useEffect(() => {
    if (isLogined && invitationInfo?.teamId) {
      navigate(`${PATH.INVITE}/${invitationInfo?.teamId}`);
      setTeamId(invitationInfo?.teamId);
    }
    if (data) {
      setInvitationInfo(data?.data);
    }
  }, [createToast, data, invitationInfo?.teamId, isLogined, navigate]);

  const deleteLocalStorageInviteInfo = () => {
    localStorage.removeItem(INVITATION_ID);
    localStorage.removeItem(INVITE_TEAM_ID);
  };

  const handleApproveInvitation = () => {
    approveMutate(
      {
        params: {
          query: {
            teamId,
            teamInvitationId: +invitationId,
          },
        },
      },
      {
        onSuccess: () => {
          deleteLocalStorageInviteInfo();
          localStorage.setItem('teamId', `${teamId}`);
          navigate(PATH.DASHBOARD);
        },
        onError: (error: components['schemas']['ErrorResponse']) => {
          deleteLocalStorageInviteInfo();
          createToast(error.message, 'error');
          navigate(PATH.ONBOARDING);
        },
      }
    );
  };

  const handleDenyInvitation = () => {
    denyMutate(
      {
        params: {
          query: {
            invitationId: +invitationId,
          },
        },
      },
      {
        onSuccess: () => {
          deleteLocalStorageInviteInfo();
          navigate(PATH.ONBOARDING);
        },
        onError: (error: components['schemas']['ErrorResponse']) => {
          deleteLocalStorageInviteInfo();
          createToast(error.message, 'error');
          navigate(PATH.ONBOARDING);
        },
      }
    );
  };

  return (
    <Flex styles={{ justify: 'center', paddingTop: `${isLogined ? '14rem' : '20rem'}` }}>
      <Flex tag="section" styles={{ direction: 'column', gap: '6rem', width: '39rem' }}>
        <LogoTikiSm width={70} />
        <Flex css={inviteStyle}>
          <Text tag="body4">{invitationInfo?.sender}님의 초대</Text>
          <Flex styles={{ justify: 'center', align: 'center', gap: '0.4rem' }}>
            {invitationInfo?.teamIconUrl ? (
              <img src={invitationInfo?.teamIconUrl} alt="팀 프로필" css={{ width: '3.6rem' }} />
            ) : (
              <Text tag="body6" css={firstSpellStyle}>
                {invitationInfo?.teamName[0]}
              </Text>
            )}
            <Heading tag="H5" css={{ padding: '1.4rem 1rem' }}>
              {invitationInfo?.teamName} 워크스페이스
            </Heading>
          </Flex>
        </Flex>
        {isLogined ? (
          <Flex css={{ '&, &>*': { width: '100%' }, gap: '0.4rem' }}>
            <Button size="xLarge" variant="secondary" onClick={handleApproveInvitation}>
              초대 수락
            </Button>
            <Button
              size="xLarge"
              css={{ color: theme.colors.sementic_red, backgroundColor: theme.colors.sementic_red_10 }}
              onClick={handleDenyInvitation}>
              거절하기
            </Button>
          </Flex>
        ) : (
          <Button size="xLarge" css={{ width: '100%' }}>
            로그인하고 초대수락하기
          </Button>
        )}
      </Flex>
    </Flex>
  );
};

export default InvitedPage;
