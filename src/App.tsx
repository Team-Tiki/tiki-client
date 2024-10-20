import { css } from '@emotion/react';
import * as Sentry from '@sentry/react';

import { Outlet, useNavigate } from 'react-router-dom';

import { useQueryErrorResetBoundary } from '@tanstack/react-query';

import ErrorBoundary from '@/common/component/ErrorBoundary/ErrorBoundary';
import { theme } from '@/common/style/theme/theme';

import { HTTPError } from '@/shared/api/HTTPError';
import Header from '@/shared/component/Header/Header';
import Login from '@/shared/component/Login/Login';
import ModalContainer from '@/shared/component/Modal/ModalContainer';
import SNB from '@/shared/component/SideNavBar/LeftSidebar';
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
        <SNB />
        <main css={layoutStyle}>
          <Header />
          <Outlet />
        </main>
      </Login>
    </ErrorBoundary>
  );
};

const layoutStyle = css({
  display: 'flex',
  flexDirection: 'column',

  height: '100%',
  width: 'calc(100% - 7.6rem)',

  padding: '0 3.4rem 4.8rem 3.2rem',
  marginLeft: '7.6rem',

  borderRadius: '16px',
  backgroundColor: theme.colors.white,
});

export default App;
