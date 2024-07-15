import { css } from '@emotion/react';

import { Outlet } from 'react-router-dom';

import Header from '@/common/component/Header/Header';

const App = () => {
  return (
    <>
      <Header />
      <main css={layoutStyle}>
        <Outlet />
      </main>
    </>
  );
};

const layoutStyle = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  width: '100vw',
  minHeight: 'calc(100vh - 95px)',
});

export default App;
