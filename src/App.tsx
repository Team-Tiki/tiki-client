import { css } from '@emotion/react';

import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { theme } from '@/common/style/theme/theme';

import LeftSidebar from '@/shared/component/LeftSidebar/LeftSidebar';

const App = () => {
  const location = useLocation();
  const showSidebar = ['/showcase', '/archiving'].includes(location.pathname);

  useEffect(() => {
    if (showSidebar) {
      document.body.style.backgroundColor = theme.colors.blue_900;
    }
  }, []);

  return (
    <div css={containerStyle}>
      <LeftSidebar />
      <main css={layoutStyle}>
        <Outlet />
      </main>
    </div>
  );
};

const layoutStyle = css({
  height: '100%',

  borderRadius: '16px',
  backgroundColor: theme.colors.white,
});

const containerStyle = css({
  padding: '0.4rem 0.4rem 0.4rem 8.4rem ',

  backgroundColor: theme.colors.blue_900,
});

export default App;
