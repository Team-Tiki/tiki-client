import { LogoTikiSm } from '@tiki/icon';
import { Button, Flex, theme } from '@tiki/ui';

import { pageStyle } from '@/page/login/index/LoginPage.style';

const InviteData = {
  invitor: 'invitor',
  teamImg: 'teamImg',
  teamName: 'teamName',
};
const InvitedPage = () => {
  return (
    <Flex styles={{ justify: 'center', paddingTop: '15rem' }}>
      <Flex styles={{ direction: 'column', gap: '6rem', width: '39rem' }}>
        <LogoTikiSm width={70} />
        <div>
          {InviteData.invitor}님의 초대
          <div>
            <img src={InviteData.teamImg} alt="팀 프로필 이미지" />
            <p>{InviteData.teamName} 워크스페이스</p>
          </div>
        </div>
        <Button>로그인하고 초대수락하기</Button>
      </Flex>
    </Flex>
  );
};

export default InvitedPage;
