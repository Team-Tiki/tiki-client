import { css } from '@emotion/react';

import { Outlet, useLocation } from 'react-router-dom';

import { Header } from '@/common/component/Header/Header';

const App = () => {
  const { pathname } = useLocation();

  const regexp = new RegExp('^(/signin(/.*)?|/password(/.*)?)$');

  const isAuthPage = !pathname.match(regexp);

  return (
    <>
      <Header isLogin={false} isAuthPage={isAuthPage} />
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

  minHeight: 'calc(100vh - 95px)',
});

export default App;
