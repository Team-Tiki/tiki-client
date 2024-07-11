import { css } from '@emotion/react';

import { Outlet } from 'react-router-dom';

import Header from '@/common/component/Header/Header';

import DocumentBar from './page/archiving/component/DocumentBar/DocumentBar';

const App = () => {
  return (
    <>
      <Header />
      <main css={layoutStyle}>
        <Outlet />
        <DocumentBar />
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
