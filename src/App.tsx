import { css } from '@emotion/react';

import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { theme } from '@/common/style/theme/theme';

import LeftSidebar from '@/shared/component/LeftSidebar/LeftSidebar';
import Login from '@/shared/component/Login/Login';

const App = () => {
  const location = useLocation();
  const isAuth = ['/showcase', '/archiving'].includes(location.pathname);

  useEffect(() => {
    if (isAuth) {
      document.body.style.backgroundColor = theme.colors.blue_900;
    }
  }, [isAuth]);

  return (
    <Login>
      <div css={containerStyle}>
        <LeftSidebar />
        <main css={layoutStyle}>
          <Outlet />
        </main>
      </div>
    </Login>
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
