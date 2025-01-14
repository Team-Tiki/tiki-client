import { LogoTikiSm } from '@tiki/icon';
import { Button, Flex, Heading, Text, theme } from '@tiki/ui';

import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { useInvitationInfo } from '@/page/invite/hook/queries';
import { firstSpellStyle, inviteStyle } from '@/page/invite/index.styles';
import { InvitationType } from '@/page/invite/type';

import { PATH } from '@/shared/constant/path';
import { useIsLoggedIn } from '@/shared/store/auth';

const InvitedPage = () => {
  //로그인되었으면(<-이게 확인이 안되긴해) 저걸로 바뀌는겨
  const isLogined = true;
  const isExpired = false;

  const [invitationInfo, setInvitationInfo] = useState<InvitationType>();

  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const invitationId = searchParams.get('invitationId') || '';

  const { data } = useInvitationInfo(+invitationId);

  useEffect(() => {
    if (data) {
      setInvitationInfo(data?.data);
      localStorage.setItem('INVITATION_ID', invitationId);
    }
  }, [data, invitationId]);

  useEffect(() => {
    if (isLogined) {
      //로그인이 되었으면 경로이동..
      navigate(PATH.INVITE_IN); //이상하다
    }
  });

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
            <Button size="xLarge" variant="secondary">
              초대 수락
            </Button>
            <Button
              size="xLarge"
              css={{ color: theme.colors.sementic_red, backgroundColor: theme.colors.sementic_red_10 }}>
              거절하기
            </Button>
          </Flex>
        ) : (
          <Button size="xLarge" disabled={isExpired} css={{ width: '100%' }}>
            {isExpired ? '초대가 만료되었습니다.' : '로그인하고 초대수락하기'}
          </Button>
        )}
      </Flex>
    </Flex>
  );
};

export default InvitedPage;
