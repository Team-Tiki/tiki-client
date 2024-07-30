import { css } from '@emotion/react';

import { Outlet, useNavigate } from 'react-router-dom';

import { AxiosError } from 'axios';

import ErrorBoundary from '@/common/component/ErrorBoundary/ErrorBoundary';
import { theme } from '@/common/style/theme/theme';

import LeftSidebar from '@/shared/component/LeftSidebar/LeftSidebar';
import Login from '@/shared/component/Login/Login';
import { HTTP_STATUS_CODE } from '@/shared/constant/api';
import { PATH } from '@/shared/constant/path';
import ErrorPage from '@/shared/page/errorPage/ErrorPage';

const App = () => {
  const navigate = useNavigate();

  const handleResetError = (error: Error | AxiosError) => {
    if (error instanceof Error && !(error instanceof AxiosError)) {
      navigate(PATH.ROOT);
      return;
    }

    if (error instanceof AxiosError) {
      if (error.response?.status === HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR) {
        navigate(0);
      } else {
        navigate(PATH.ROOT);
      }
    }
  };

  return (
    <ErrorBoundary fallback={ErrorPage} onReset={handleResetError}>
      <Login>
        <div css={containerStyle}>
          <LeftSidebar />
          <main css={layoutStyle}>
            <Outlet />
          </main>
        </div>
      </Login>
    </ErrorBoundary>
  );
};

const layoutStyle = css({
  height: '100%',

  borderRadius: '16px',
  backgroundColor: theme.colors.white,
});

const containerStyle = css({
  padding: '0.4rem 0.4rem 0.4rem 8.9rem ',

  backgroundColor: theme.colors.blue_900,
});

export default App;
