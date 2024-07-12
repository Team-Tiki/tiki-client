import App from '@/App';
import ArchivingPage from '@/page/archiving/ArchivingPage';
import LoginPage from '@/page/login/LoginPage';
import ShowcasePage from '@/page/showcase/ShowcasePage';
import TermPage from '@/page/signUp/index/TermPage';
import InfoFormPage from '@/page/signUp/info/InfoFormPage';

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
    path: '/password/auth',
    element: <p>인증</p>,
  },
  {
    path: '/password/reset',
    element: <p>재설정</p>,
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
