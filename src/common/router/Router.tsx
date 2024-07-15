import App from '@/App';
import ArchivingPage from '@/page/archiving/ArchivingPage';
import LoginPage from '@/page/login/LoginPage';
import ShowcasePage from '@/page/showcase/ShowcasePage';
import TermPage from '@/page/signUp/index/TermPage';
import InfoFormPage from '@/page/signUp/info/InfoFormPage';
import PasswordPage from '@/page/signUp/password/PasswordPage';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  { path: '/login', element: <LoginPage /> },
  {
    path: '/',
    element: <App />,
    children: [
      { path: 'showcase', element: <ShowcasePage /> },
      { path: 'archiving', element: <ArchivingPage /> },
      {
        path: '/signin',
        element: <TermPage />,
      },
      {
        path: '/signin/info',
        element: <InfoFormPage />,
      },
      {
        path: '/password/auth',
        element: <p>인증</p>,
      },
      {
        path: '/password/reset',
        element: <p>재설정</p>,
      },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
