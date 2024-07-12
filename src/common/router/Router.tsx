import App from '@/App';
import ArchivingPage from '@/page/archiving/ArchivingPage';
import LoginPage from '@/page/login/LoginPage';
import TermPage from '@/page/signIn/index/TermPage';
import InfoFormPage from '@/page/signIn/info/InfoFormPage';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  { path: '/login', element: <LoginPage /> },
  {
    path: 'signin',
    element: <TermPage />,
  },
  {
    path: 'signin/info',
    element: <InfoFormPage />,
  },
  {
    path: 'password/auth',
    element: <p>인증</p>,
  },
  {
    path: 'password/reset',
    element: <p>재설정</p>,
  },
  {
    path: '/',
    element: <App />,
    children: [
      { path: 'showcase', element: <p>showcase</p> },
      { path: 'archiving', element: <ArchivingPage /> },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
