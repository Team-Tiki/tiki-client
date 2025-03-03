import { LogoTikiSm } from '@tiki/icon';
import { Button, Flex, Heading, Text, useToastAction } from '@tiki/ui';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useQueryClient } from '@tanstack/react-query';

import { AxiosError } from 'axios';

import { MESSAGE } from '@/page/invite/constant';
import { useInvitationInfo } from '@/page/invite/hook/common/useInvitationInfo';
import { useApproveInvitation, useDenyInvitation } from '@/page/invite/hook/queries';
import { firstSpellStyle, inviteStyle, redButtonStyle } from '@/page/invite/index.styles';
import { InvitationType } from '@/page/invite/type';

import { STORAGE_KEY } from '@/shared/constant/api';
import { PATH } from '@/shared/constant/path';

const InvitedPage = () => {
  const isLogined = !!localStorage.getItem(STORAGE_KEY.ACCESS_TOKEN_KEY);

  const { createToast } = useToastAction();

  const queryClient = useQueryClient();

  const [invitationInfo, setInvitationInfo] = useState<InvitationType>();
  const [teamId, setTeamId] = useState<number>(0);

  const navigate = useNavigate();

  const { data, invitationId, failureCount } = useInvitationInfo();
  const { mutate: approveMutate } = useApproveInvitation();
  const { mutate: denyMutate } = useDenyInvitation();

  useEffect(() => {
    if (isLogined && invitationInfo?.teamId) {
      navigate(`${PATH.INVITE}/${invitationInfo?.teamId}`);
      setTeamId(invitationInfo?.teamId);
    }
    if (data) {
      setInvitationInfo(data?.data);

      if (!data.success) {
        handleApiError(data.message);
      }
    } else if (failureCount && invitationId) {
      handleApiError('존재하지 않거나 만료된 초대정보입니다.');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, failureCount, invitationId, invitationInfo?.teamId, isLogined]);

  const handleApiError = (message: string) => {
    clearInvitation();
    navigate(PATH.DASHBOARD);
    createToast(message, 'error');
  };

  const clearInvitation = () => {
    localStorage.removeItem(STORAGE_KEY.INVITATION_ID);
    localStorage.removeItem(STORAGE_KEY.INVITE_TEAM_ID);
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
          createToast(MESSAGE.INVITE_SUCCESS, 'success');

          queryClient.invalidateQueries({ queryKey: ['get', '/api/v1/members/teams'] });
          navigate(PATH.DASHBOARD);
          localStorage.setItem(STORAGE_KEY.TEAM_ID, `${teamId}`);
          localStorage.setItem(STORAGE_KEY.TEAM_NAME, `${invitationInfo?.teamName}`);
        },
        onError: (error: AxiosError) => {
          createToast(error.message, 'error');
          navigate(PATH.ONBOARDING);
        },
      }
    );
    clearInvitation();
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
          createToast(MESSAGE.DENY_SUCCESS, 'success');
        },
        onError: (error: AxiosError) => {
          createToast(error.message, 'error');
        },
      }
    );
    clearInvitation();
    navigate(PATH.ONBOARDING);
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
            <Button size="xLarge" css={redButtonStyle} onClick={handleDenyInvitation}>
              거절하기
            </Button>
          </Flex>
        ) : (
          <Button size="xLarge" css={{ width: '100%' }} onClick={() => navigate(PATH.LOGIN)}>
            로그인하고 초대수락하기
          </Button>
        )}
      </Flex>
    </Flex>
  );
};

export default InvitedPage;
