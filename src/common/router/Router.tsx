import App from '@/App';

import { lazy } from 'react';
import { Outlet, RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom';

import ErrorBoundary from '@/common/component/ErrorBoundary/ErrorBoundary';

import InfoFormPage from '@/page/signUp/info/InfoFormPage';

import { PATH } from '@/shared/constant/path';

const Public = () => {
  const navigate = useNavigate();

  const handleReset = () => navigate(-1);

  return (
    <ErrorBoundary fallback={ErrorPage} onReset={handleReset}>
      <Outlet />
    </ErrorBoundary>
  );
};

const LandingPage = lazy(() => import('@/page/landing/LandingPage'));
const LoginPage = lazy(() => import('@/page/login/index/LoginPage'));
const TermPage = lazy(() => import('@/page/signUp/index/TermPage'));
const PasswordAuthPage = lazy(() => import('@/page/login/password/auth/PasswordAuthPage'));
const PasswordResetPage = lazy(() => import('@/page/login/password/reset/PasswordResetPage'));
const ShowcasePage = lazy(() => import('@/page/showcase/index/ShowcasePage'));
const ArchivingPage = lazy(() => import('@/page/archiving/index/ArchivingPage'));
const ErrorPage = lazy(() => import('@/shared/page/errorPage/ErrorPage'));
const ComingsoonPage = lazy(() => import('@/shared/page/comingsoonPage/ComingsoonPage'));

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
      {
        path: PATH.ARCHIVING,
        element: <ArchivingPage />,
      },
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
