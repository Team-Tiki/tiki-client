import App from '@/App';
import ArchivingPage from '@/page/archiving/ArchivingPage';
import LoginPage from '@/page/login/LoginPage';
import PasswordAuthPage from '@/page/login/passwordAuth/PasswordAuthPage';
import PasswordResetPage from '@/page/login/passwordReset/PasswordResetPage';
import ShowcasePage from '@/page/showcase/ShowcasePage';
import TermPage from '@/page/signUp/index/TermPage';
import InfoFormPage from '@/page/signUp/info/InfoFormPage';
import PasswordPage from '@/page/signUp/password/PasswordPage';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  { path: '/login', element: <LoginPage /> },
  {
    path: '/signup',
    element: <TermPage />,
  },
  {
    path: '/signup/info',
    element: <InfoFormPage />,
  },
  {
    path: '/password',
    element: <PasswordPage />,
  },
  {
    path: '/password/auth',
    element: <PasswordAuthPage />,
  },
  {
    path: '/password/reset',
    element: <PasswordResetPage />,
  },
  {
    path: '/',
    element: <App />,
    children: [
      { path: 'showcase', element: <ShowcasePage /> },
      { path: 'archiving', element: <ArchivingPage /> },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
