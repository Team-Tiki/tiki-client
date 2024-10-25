import { css } from '@emotion/react';
import * as Sentry from '@sentry/react';

import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { useQueryErrorResetBoundary } from '@tanstack/react-query';

import ErrorBoundary from '@/common/component/ErrorBoundary/ErrorBoundary';

import { HTTPError } from '@/shared/api/HTTPError';
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

  const { pathname } = useLocation();

  /** 아카이빙 페이지 DocumentBar를 위한 라우트별 동적 패딩 */
  const isArchivingPage = pathname === '/archiving';

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
        <main css={layoutStyle(isArchivingPage)}>
          <Header />
          <Outlet />
        </main>
      </Login>
    </ErrorBoundary>
  );
};

const layoutStyle = (flag: boolean) =>
  css({
    display: 'flex',
    flexDirection: 'column',

    height: '100%',
    width: 'calc(100% - 7.6rem)',

    padding: flag ? '0' : '2rem 3.4rem 4.8rem 3.2rem',

    marginLeft: '7.6rem',

    overflow: 'hidden',
  });

export default App;
