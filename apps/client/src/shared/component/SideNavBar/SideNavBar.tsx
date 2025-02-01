import { IcAdd, IcGlobal, IcTikiLogo } from '@tiki/icon';
import { Divider, Flex, theme } from '@tiki/ui';

import Logo from '@/shared/component/SideNavBar/Logo';
import TeamList from '@/shared/component/SideNavBar/TeamList';
import UserMenu from '@/shared/component/SideNavBar/UserMenu';
import { containerStyle, tikiLogoStyle } from '@/shared/component/SideNavBar/index.style';
import { PATH } from '@/shared/constant/path';
import { useOpenModal } from '@/shared/store/modal';

const SideNavBar = () => {
  const openModal = useOpenModal();

  const handleWorkspaceClick = () => {
    openModal('create-workspace');
  };

  return (
    <nav css={containerStyle}>
      <IcTikiLogo css={tikiLogoStyle} />
      <Flex styles={{ direction: 'column', align: 'center', gap: '2rem' }}>
        <div css={{ padding: '2rem' }}>
          <Logo
            to={`${location.pathname}${location.search}`}
            name="showcase"
            onClick={() => alert('준비 중인 기능입니다.')}
            isActive={location.pathname === PATH.SHOWCASE}>
            <IcGlobal width={20} height={20} />
          </Logo>
        </div>
        <Divider type="horizontal" size={56.78} color={theme.colors.gray_300} />

        <TeamList />

        <Logo
          to={`${location.pathname}${location.search}`}
          onClick={handleWorkspaceClick}
          name="새로운 워크스페이스 생성">
          <IcAdd width={16} height={16} />
        </Logo>
      </Flex>

      <UserMenu />
    </nav>
  );
};

export default SideNavBar;
