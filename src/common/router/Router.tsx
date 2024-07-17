import App from '@/App';
import ArchivingPage from '@/page/archiving/index/ArchivingPage';
import LandingPage from '@/page/landing/LandingPage';
import LoginPage from '@/page/login/index/LoginPage';
import PasswordAuthPage from '@/page/login/password/passwordAuth/PasswordAuthPage';
import PasswordResetPage from '@/page/login/password/passwordReset/PasswordResetPage';
import ShowcasePage from '@/page/showcase/index/ShowcasePage';
import TermPage from '@/page/signUp/index/TermPage';
import InfoFormPage from '@/page/signUp/info/InfoFormPage';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { PATH } from '@/shared/constant/path';
import ComingsoonPage from '@/shared/page/comingsoonPage/ComingsoonPage';
import ErrorPage from '@/shared/page/errorPage/ErrorPage';

const router = createBrowserRouter([
  { path: PATH.LANDING, element: <LandingPage /> },
  { path: PATH.LOGIN, element: <LoginPage /> },
  {
    path: PATH.SIGNUP,
    element: <TermPage />,
  },
  {
    path: PATH.SIGNUP_INFO,
    element: <InfoFormPage />,
  },
  {
    path: PATH.SIGNUP_INFO_PASSWORD,
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
  {
    path: '/comingsoon',
    element: <ComingsoonPage />,
  },
  {
    path: '/error',
    element: <ErrorPage />,
  },
  {
    path: PATH.ROOT,
    element: <App />,
    children: [
      { index: true, element: <ShowcasePage /> },
      { path: PATH.ARCHIVING, element: <ArchivingPage /> },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
