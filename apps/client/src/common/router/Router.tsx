import App from '@/App';

import { Suspense } from 'react';
import { Outlet, RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom';

import ErrorBoundary from '@/common/component/ErrorBoundary/ErrorBoundary';
import {
  ArchivingPage,
  ComingsoonPage,
  CreateNotePage,
  DashboardPage,
  DeletedPage,
  DrivePage,
  ErrorPage,
  HandoverNotePage,
  HandoverPage,
  InvitePage,
  LandingPage,
  LoginPage,
  OnBoardingPage,
  PasswordAuthPage,
  PasswordResetPage,
  ShowcasePage,
  TermPage,
  WorkSpaceSettingPage,
} from '@/common/router/lazy';

import SignUpPage from '@/page/signUp/info';

import { PATH } from '@/shared/constant/path';

const options = {
  future: {
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  },
};

const Public = () => {
  const navigate = useNavigate();

  const handleReset = () => navigate(-1);

  return (
    <ErrorBoundary fallback={ErrorPage} onReset={handleReset}>
      <Outlet />
    </ErrorBoundary>
  );
};

const router = createBrowserRouter(
  [
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
              <SignUpPage />
            </Suspense>
          ),
        },
        {
          path: PATH.INVITE,
          element: (
            <Suspense>
              <InvitePage />
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
          path: PATH.INVITE_IN,
          element: (
            <Suspense>
              <InvitePage />
            </Suspense>
          ),
        },
        {
          path: PATH.DASHBOARD,
          element: (
            <Suspense>
              <DashboardPage />
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
              <HandoverPage />
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
        {
          path: PATH.HANDOVER_NOTE,
          element: (
            <Suspense>
              <HandoverNotePage />
            </Suspense>
          ),
        },
        {
          path: PATH.CREATE_HANDOVER_NOTE,
          element: (
            <Suspense>
              <CreateNotePage />
            </Suspense>
          ),
        },
        {
          path: PATH.WORKSPACE_SETTING,
          element: (
            <Suspense>
              <WorkSpaceSettingPage />
            </Suspense>
          ),
        },
        {
          path: PATH.ONBOARDING,
          element: (
            <Suspense>
              <OnBoardingPage />
            </Suspense>
          ),
        },
      ],
    },
  ],
  options
);

export const AppRouter = () => {
  return <RouterProvider router={router} future={{ v7_startTransition: true }} />;
};
