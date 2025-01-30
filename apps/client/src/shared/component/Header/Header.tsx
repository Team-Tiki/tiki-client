import { Flex, Heading } from '@tiki/ui';

import { useMatch, useNavigate } from 'react-router-dom';

import AlarmButton from '@/shared/component/Header/AlarmButton';
import { headerStyle } from '@/shared/component/Header/Header.style';
import InviteButton from '@/shared/component/Header/InviteButton';
import SettingButton from '@/shared/component/Header/SettingButton';
import RouteNav from '@/shared/component/RouteNav/RouteNav';
import { STORAGE_KEY } from '@/shared/constant/api';
import { PATH } from '@/shared/constant/path';

const Header = () => {
  const navigate = useNavigate();
  const title = localStorage.getItem(STORAGE_KEY.TEAM_NAME);

  const isDashboardPage = useMatch(PATH.DASHBOARD);
  const isWorkspaceSettingPage = useMatch(PATH.WORKSPACE_SETTING);
  const isInvitedPage = useMatch(PATH.INVITE_IN);
  const isOnboardingPage = useMatch(PATH.ONBOARDING);

  const isRouteNavVisble = !isDashboardPage && !isWorkspaceSettingPage && !isInvitedPage && !isOnboardingPage;
  const isTitleVisible = !isInvitedPage && !isOnboardingPage;
  const isRightSideVisible = !isWorkspaceSettingPage && !isOnboardingPage && !isInvitedPage;

  return (
    <header css={headerStyle}>
      <Flex styles={{ justify: 'space-between' }}>
        {isTitleVisible && (
          <Heading
            tag="H1"
            css={{ cursor: 'pointer' }}
            onClick={() => {
              navigate(PATH.DASHBOARD);
            }}>
            {`${title} 워크스페이스`}
          </Heading>
        )}

        {isRightSideVisible && (
          <div css={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
            <InviteButton />
            <AlarmButton />
            <SettingButton />
          </div>
        )}
      </Flex>

      {isRouteNavVisble && <RouteNav />}
    </header>
  );
};

export default Header;
