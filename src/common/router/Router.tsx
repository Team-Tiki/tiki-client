import App from '@/App';

import { Suspense, lazy } from 'react';
import { Outlet, RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom';

import ErrorBoundary from '@/common/component/ErrorBoundary/ErrorBoundary';

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
const InfoFormPage = lazy(() => import('@/page/signUp/info/InfoFormPage'));
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
    errorElement: (
      <Suspense>
        <ErrorPage />
      </Suspense>
    ),
    children: [
      {
        path: PATH.LANDING,
        element: (
          <Suspense>
            <LandingPage />
          </Suspense>
        ),
      },
      {
        path: PATH.LOGIN,
        element: (
          <Suspense>
            <LoginPage />
          </Suspense>
        ),
      },
      {
        path: PATH.SIGNUP,
        element: (
          <Suspense>
            <TermPage />
          </Suspense>
        ),
      },
      {
        path: PATH.SIGNUP_INFO,
        element: (
          <Suspense>
            <InfoFormPage />
          </Suspense>
        ),
      },
      {
        path: PATH.SIGNUP_PASSWORD,
        element: (
          <Suspense>
            <InfoFormPage />
          </Suspense>
        ),
      },
      {
        path: PATH.PASSWORD_AUTH,
        element: (
          <Suspense>
            <PasswordAuthPage />
          </Suspense>
        ),
      },
      {
        path: PATH.PASSWORD_RESET,
        element: (
          <Suspense>
            <PasswordResetPage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: PATH.ROOT,
    element: <App />,
    errorElement: (
      <Suspense>
        <ErrorPage />
      </Suspense>
    ),
    children: [
      {
        path: PATH.SHOWCASE,
        element: (
          <Suspense>
            <ShowcasePage />
          </Suspense>
        ),
      },
      {
        path: PATH.ARCHIVING,
        element: (
          <Suspense>
            <ArchivingPage />
          </Suspense>
        ),
      },
      {
        path: PATH.COMING_SOON,
        element: (
          <Suspense>
            <ComingsoonPage />
          </Suspense>
        ),
      },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
