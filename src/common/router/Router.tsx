import App from '@/App';

import { Suspense } from 'react';
import { Outlet, RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom';

import ErrorBoundary from '@/common/component/ErrorBoundary/ErrorBoundary';
import {
  ArchivingPage,
  ComingsoonPage,
  DrivePage,
  ErrorPage,
  InfoFormPage,
  LandingPage,
  LoginPage,
  PasswordAuthPage,
  PasswordResetPage,
  ShowcasePage,
  TermPage,
} from '@/common/router/lazy';

import DeletedPage from '@/page/deleted/DeletedPage';

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
        path: PATH.DASHBOARD,
        element: (
          <Suspense>
            <h1>대쉬보드 페이지입니다.</h1>
          </Suspense>
        ),
      },
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
      {
        path: PATH.DRIVE,
        element: (
          <Suspense>
            <DrivePage />
          </Suspense>
        ),
      },
      {
        path: PATH.HANDOVER,
        element: (
          <Suspense>
            <h1>HandOver</h1>
          </Suspense>
        ),
      },
      {
        path: PATH.DELETED,
        element: (
          <Suspense>
            <DeletedPage />
          </Suspense>
        ),
      },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
