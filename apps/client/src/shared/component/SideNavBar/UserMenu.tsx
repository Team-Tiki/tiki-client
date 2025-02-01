import { IcAvatar, IcEditProfile, IcExit } from '@tiki/icon';
import { Divider, Flex, MenuItem, MenuList, MenuRoot, Text, theme } from '@tiki/ui';
import { useOverlay } from '@tiki/utils';

import { settingStyle } from '@/shared/component/SideNavBar/index.style';
import { useLogout } from '@/shared/hook/common/useLogout';

const UserMenu = () => {
  const { isOpen, close, toggle } = useOverlay();

  const { logout } = useLogout();

  return (
    <MenuRoot onClose={close} css={settingStyle}>
      <div
        role="button"
        tabIndex={0}
        onClick={toggle}
        onKeyDown={(e) => e.key === 'Enter' && toggle()}
        css={{ cursor: 'pointer' }}>
        <IcAvatar width={32} height={32} />
      </div>
      <MenuList isOpen={isOpen} css={{ left: 'calc(100%)', bottom: 20 }}>
        <MenuItem onSelect={() => alert('준비 중인 기능입니다.')}>
          <Flex styles={{ align: 'center', gap: '0.8rem' }}>
            <IcEditProfile width={16} height={16} />
            <Text tag="body8">내 정보 수정</Text>
          </Flex>
        </MenuItem>
        <MenuItem onSelect={logout}>
          <Flex styles={{ align: 'center', gap: '0.8rem' }}>
            <IcExit width={16} height={16} />
            <Text tag="body8">로그아웃</Text>
          </Flex>
        </MenuItem>
        <Divider />
        <MenuItem css={{ pointerEvents: 'none' }} onSelect={() => {}}>
          {/** TODO: 내 정보 API 연결하여 표시 */}
          <Flex styles={{ direction: 'column', gap: '0.6rem' }}>
            <Text tag="body8" css={{ fontWeight: 500 }}>
              최주용
            </Text>
            <Text tag="body8" css={{ fontWeight: 400, color: theme.colors.gray_800 }}>
              email@tiki.kr
            </Text>
          </Flex>
        </MenuItem>
      </MenuList>
    </MenuRoot>
  );
};

export default UserMenu;
