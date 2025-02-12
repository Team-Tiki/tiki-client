import { IcGlobal, IcTikiLogo } from '@tiki/icon';
import { Divider, Flex, theme } from '@tiki/ui';

import { $api } from '@/shared/api/client';
import AddWorkspaceButton from '@/shared/component/SideNavBar/AddWorkspaceButton';
import Logo from '@/shared/component/SideNavBar/Logo';
import TeamList from '@/shared/component/SideNavBar/TeamList';
import UserMenu from '@/shared/component/SideNavBar/UserMenu';
import { containerStyle, tikiLogoStyle } from '@/shared/component/SideNavBar/index.style';
import { MAX_TEAM_COUNT } from '@/shared/constant';
import { PATH } from '@/shared/constant/path';

const SideNavBar = () => {
  const { data } = $api.useQuery('get', '/api/v1/members/teams');

  const isFullTeam = data?.data?.belongTeamGetResponses && data?.data?.belongTeamGetResponses.length >= MAX_TEAM_COUNT;

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

        <TeamList list={data?.data} />

        <AddWorkspaceButton disabled={isFullTeam} />
      </Flex>

      <UserMenu />
    </nav>
  );
};

export default SideNavBar;
