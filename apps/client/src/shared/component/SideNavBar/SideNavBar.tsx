import { IcGlobal, IcTikiLogo } from '@tiki/icon';
import { Divider, Flex, theme } from '@tiki/ui';

import AddWorkspaceButton from '@/shared/component/SideNavBar/AddWorkspace';
import Logo from '@/shared/component/SideNavBar/Logo';
import TeamList from '@/shared/component/SideNavBar/TeamList';
import UserMenu from '@/shared/component/SideNavBar/UserMenu';
import { containerStyle, tikiLogoStyle } from '@/shared/component/SideNavBar/index.style';
import { PATH } from '@/shared/constant/path';

const SideNavBar = () => {
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

        <AddWorkspaceButton />
      </Flex>

      <UserMenu />
    </nav>
  );
};

export default SideNavBar;
