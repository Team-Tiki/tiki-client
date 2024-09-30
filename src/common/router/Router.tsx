import App from '@/App';
import ArchivingPage from '@/page/archiving/index/ArchivingPage';
import LandingPage from '@/page/landing/LandingPage';
import LoginPage from '@/page/login/index/LoginPage';
import PasswordAuthPage from '@/page/login/password/auth/PasswordAuthPage';
import PasswordResetPage from '@/page/login/password/reset/PasswordResetPage';
import ShowcasePage from '@/page/showcase/index/ShowcasePage';
import TermPage from '@/page/signUp/index/TermPage';
import InfoFormPage from '@/page/signUp/info/InfoFormPage';

import { Outlet, RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom';

import ErrorBoundary from '@/common/component/ErrorBoundary/ErrorBoundary';

import { PATH } from '@/shared/constant/path';
import ComingsoonPage from '@/shared/page/comingsoonPage/ComingsoonPage';
import ErrorPage from '@/shared/page/errorPage/ErrorPage';

const Public = () => {
  const navigate = useNavigate();

  const handleReset = () => navigate(-1);

  return (
    <ErrorBoundary fallback={ErrorPage} onReset={handleReset}>
      <Outlet />
    </ErrorBoundary>
  );
};

const router = createBrowserRouter([
  {
    path: PATH.ROOT,
    element: <Public />,
    errorElement: <ErrorPage />,
    children: [
      { path: PATH.LANDING, element: <LandingPage /> },
      {
        path: PATH.LOGIN,
        element: <LoginPage />,
      },
      {
        path: PATH.SIGNUP,
        element: <TermPage />,
      },
      {
        path: PATH.SIGNUP_INFO,
        element: <InfoFormPage />,
      },
      {
        path: PATH.SIGNUP_PASSWORD,
        element: <InfoFormPage />,
      },
      {
        path: PATH.PASSWORD_AUTH,
        element: <PasswordAuthPage />,
      },
      {
        path: PATH.PASSWORD_RESET,
        element: <PasswordResetPage />,
      },
    ],
  },
  {
    path: PATH.ROOT,
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: PATH.SHOWCASE, element: <ShowcasePage /> },
      { path: PATH.ARCHIVING, element: <ArchivingPage /> },
      {
        path: PATH.COMING_SOON,
        element: <ComingsoonPage />,
      },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
