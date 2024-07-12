import { css } from '@emotion/react';

import { Outlet } from 'react-router-dom';

import Header from '@/common/component/Header/Header';
import { theme } from '@/common/style/theme/theme';

import LeftSidebar from '@/shared/component/LeftSidebar/LeftSidebar';

const App = () => {
  return (
    <div css={containerStyle}>
      <LeftSidebar />
      <Header />
      <main css={layoutStyle}>
        <Outlet />
      </main>
    </div>
  );
};

const layoutStyle = css({
  display: 'flex',
  flexDirection: 'column',

  height: 'calc(100vh - 95px)',

  borderBottomLeftRadius: '16px',
  borderBottomRightRadius: '16px',

  backgroundColor: theme.colors.white,
  overscrollBehavior: 'contain',
});

const containerStyle = css({
  flex: 1,

  height: '100vh',

  paddingLeft: '8rem',
  paddingRight: '0.4rem',

  backgroundColor: theme.colors.blue_900,
  overscrollBehavior: 'contain',
});

export default App;
