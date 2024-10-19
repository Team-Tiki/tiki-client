import IcAlarmNo from '@/common/asset/svg/ic_alert_no.svg?react';
import IcAlarmYes from '@/common/asset/svg/ic_alert_yes.svg?react';
import IcSetting from '@/common/asset/svg/ic_setting_gray.svg?react';
import Flex from '@/common/component/Flex/Flex';
import Heading from '@/common/component/Heading/Heading';
import { theme } from '@/common/style/theme/theme';

import { headerStyle, iconStyle, settingWrapperStyle } from '@/shared/component/Header/Header.style';

const Header = () => {
  /** 추후 알림 API로 연동 */
  const alertData = [
    { id: 1, content: '정건님이 티키 워크스페이스로 초대 요청하였습니다.' },
    { id: 2, content: 'SOPT 35기 워크스페이스가 생성되었습니다.' },
  ];

  return (
    <header css={headerStyle}>
      <Heading tag="H1">TIKI 워크스페이스</Heading>

      <Flex
        styles={{
          align: 'center',
        }}>
        <button>팀원 초대</button>
        <Flex
          styles={{
            width: '4rem',
            height: '4rem',
            justify: 'center',
            align: 'center',
          }}>
          {alertData.length > 0 ? <IcAlarmYes css={iconStyle} /> : <IcAlarmNo css={iconStyle} />}
        </Flex>
        <Flex
          css={settingWrapperStyle}
          styles={{
            width: '3.6rem',
            height: '3.6rem',
            justify: 'center',
            align: 'center',
          }}>
          <IcSetting strokeWidth={0.5} stroke={theme.colors.gray_800} width={24} height={24} />
        </Flex>
      </Flex>
    </header>
  );
};

export default Header;
