import { css } from '@emotion/react';

import { Outlet } from 'react-router-dom';

import Header from '@/common/component/Header/Header';
import { theme } from '@/common/style/theme/theme';

import LeftSidebar from '@/shared/component/LeftSidebar/LeftSidebar';

const App = () => {
  return (
    <div css={containerStyle}>
      <LeftSidebar />
      <main css={layoutStyle}>
        <Header />
        <Outlet />
      </main>
    </div>
  );
};

const layoutStyle = css({
  display: 'flex',
  flexDirection: 'column',

  height: '100%',

  borderRadius: '16px',

  backgroundColor: theme.colors.white,
});

const containerStyle = css({
  height: '100%',

  padding: '0.4rem 0.4rem 0.4rem 8.4rem ',

  backgroundColor: theme.colors.blue_900,
});

export default App;
