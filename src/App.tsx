import { css } from '@emotion/react';
import * as Sentry from '@sentry/react';

import { Outlet, useNavigate } from 'react-router-dom';

import { useQueryErrorResetBoundary } from '@tanstack/react-query';

import ErrorBoundary from '@/common/component/ErrorBoundary/ErrorBoundary';

import { HTTPError } from '@/shared/api/HTTPError';
import GlobalDrawer from '@/shared/component/GlobalDrawer/GlobalDrawer';
import Header from '@/shared/component/Header/Header';
import Login from '@/shared/component/Login/Login';
import ModalContainer from '@/shared/component/Modal/ModalContainer';
import SideNavBar from '@/shared/component/SideNavBar/SideNavBar';
import { HTTP_STATUS_CODE } from '@/shared/constant/api';
import { PATH } from '@/shared/constant/path';
import ErrorPage from '@/shared/page/errorPage/ErrorPage';

const App = () => {
  const navigate = useNavigate();

  const { reset } = useQueryErrorResetBoundary();

  Sentry.init({
    dsn: import.meta.env.VITE_SENTRY_DSN,
    integrations: [Sentry.browserTracingIntegration()],

    tracePropagationTargets: ['localhost', /^https:\/\/ti-kii\.com/],
    tracesSampleRate: 1.0,
  });

  const handleResetError = (error: Error | HTTPError) => {
    if (error instanceof Error && !(error instanceof HTTPError)) {
      navigate(PATH.ROOT);
      return;
    }

    if (error instanceof HTTPError) {
      if (error.statusCode >= HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR) {
        navigate(0);
      } else {
        navigate(PATH.ROOT);
      }
      reset();
    }
  };

  return (
    <ErrorBoundary fallback={ErrorPage} onReset={handleResetError}>
      <Login>
        <ModalContainer />

        <SideNavBar />

        <div css={layoutStyle}>
          <main css={outletStyle}>
            <Header />
            <Outlet />
          </main>
          <GlobalDrawer />
        </div>
      </Login>
    </ErrorBoundary>
  );
};

export const layoutStyle = css({
  display: 'flex',
});

const outletStyle = css({
  display: 'flex',
  flexDirection: 'column',

  height: '100%',
  width: 'calc(100% - 7.6rem)',

  padding: '2rem 3.4rem 4.8rem 3.2rem',

  marginLeft: '7.6rem',

  overflow: 'hidden',
});

export default App;
