import { IcAlertYes } from '@tiki/icon';
import { Flex, Heading } from '@tiki/ui';

import { useMatch } from 'react-router-dom';

import { headerStyle } from '@/shared/component/Header/Header.style';
import InviteButton from '@/shared/component/Header/InviteButton';
import SettingButton from '@/shared/component/Header/SettingButton';
import RouteNav from '@/shared/component/RouteNav/RouteNav';
import { PATH } from '@/shared/constant/path';

const Header = () => {
  const title = localStorage.getItem('teamName');

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
        {isTitleVisible && <Heading tag="H1">{title}</Heading>}

        {isRightSideVisible && (
          <div css={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
            <InviteButton />
            <IcAlertYes css={{ cursor: 'pointer' }} width={16} height={16} />
            <SettingButton />
          </div>
        )}
      </Flex>

      {isRouteNavVisble && <RouteNav />}
    </header>
  );
};

export default Header;
