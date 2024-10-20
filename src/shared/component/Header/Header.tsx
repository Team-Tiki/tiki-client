import IcAddTeam from '@/common/asset/svg/ic_add_team.svg?react';
import IcAlarmNo from '@/common/asset/svg/ic_alert_no.svg?react';
import IcAlarmYes from '@/common/asset/svg/ic_alert_yes.svg?react';
import IcSetting from '@/common/asset/svg/ic_setting.svg?react';
import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import Heading from '@/common/component/Heading/Heading';
import Menu from '@/common/component/Menu/Menu';
import MenuItem from '@/common/component/Menu/MenuItem/MenuItem';
import MenuList from '@/common/component/Menu/MenuList/MenuList';
import { useOverlay } from '@/common/hook';

import { headerStyle, iconStyle, settingIconStyle, settingWrapperStyle } from '@/shared/component/Header/Header.style';

const Header = () => {
  /** TODO: 추후 알림 API로 연동 */
  const alertData = [
    { id: 1, content: '정건님이 티키 워크스페이스로 초대 요청하였습니다.' },
    { id: 2, content: 'SOPT 35기 워크스페이스가 생성되었습니다.' },
  ];

  const { isOpen, close, toggle } = useOverlay();

  return (
    <header css={headerStyle}>
      <Heading tag="H1">TIKI 워크스페이스</Heading>

      <Flex
        styles={{
          align: 'center',
        }}>
        {/** TODO: 팀원 초대 기능 연동 */}
        <Button variant="outline" size="medium" css={{ height: '3.6rem' }}>
          <IcAddTeam width={16} height={16} />
          팀원 초대
        </Button>
        <Flex
          styles={{
            width: '4rem',
            height: '4rem',
            justify: 'center',
            align: 'center',
          }}>
          <Menu onClose={close}>
            {alertData.length > 0 ? (
              <IcAlarmYes onClick={toggle} css={iconStyle} />
            ) : (
              <IcAlarmNo onClick={toggle} css={iconStyle} />
            )}
            <MenuList
              css={{
                top: 'calc(100% + 2rem)',
                right: 0,
                width: '20rem',
              }}
              variant="primary"
              isOpen={isOpen}>
              {alertData.map((item) => (
                <MenuItem onSelect={toggle} key={item.id}>
                  {item.content}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Flex>
        <Flex
          css={settingWrapperStyle}
          styles={{
            width: '3.6rem',
            height: '3.6rem',
            justify: 'center',
            align: 'center',
          }}>
          {/** TODO: 환경 설정 기능 연동 */}
          <IcSetting css={settingIconStyle} width={36} height={36} />
        </Flex>
      </Flex>
    </header>
  );
};

export default Header;
