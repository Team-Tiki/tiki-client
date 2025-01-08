import { LogoTikiSm } from '@tiki/icon';
import { Button, Flex, Heading, Text } from '@tiki/ui';

import { useMatch } from 'react-router-dom';

import { firstSpellStyle, inviteStyle } from '@/page/invite/index.styles';

import { PATH } from '@/shared/constant/path';

const InviteData = {
  invitor: '김가온',
  teamImg: '',
  teamName: 'TIKI',
};

const InvitedPage = () => {
  const isLogined = useMatch(PATH.INVITE_IN);

  return (
    <Flex styles={{ justify: 'center', paddingTop: `${isLogined ? '14rem' : '20rem'}` }}>
      <Flex tag="section" styles={{ direction: 'column', gap: '6rem', width: '39rem' }}>
        <LogoTikiSm width={70} />
        <Flex css={inviteStyle}>
          <Text tag="body4">{InviteData.invitor}님의 초대</Text>
          <Flex styles={{ justify: 'center', align: 'center', gap: '0.4rem' }}>
            {InviteData.teamImg ? (
              <img src={InviteData.teamImg} alt="팀 프로필 이미지" />
            ) : (
              <span css={firstSpellStyle}>{InviteData.teamName[0]}</span>
            )}
            <Heading tag="H5" css={{ padding: '1.4rem 1rem' }}>
              {InviteData.teamName} 워크스페이스
            </Heading>
          </Flex>
        </Flex>
        <Button size="xLarge" css={{ width: '100%' }}>
          로그인하고 초대수락하기
        </Button>
      </Flex>
    </Flex>
  );
};

export default InvitedPage;
