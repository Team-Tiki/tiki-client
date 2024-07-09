import App from '@/App';
import ArchivingPage from '@/page/archiving/ArchivingPage';
import TermPage from '@/page/signIn/index/TermPage';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: 'showcase', element: <p>showcase</p> },
      { path: 'archiving', element: <ArchivingPage /> },
      {
        path: 'signin',
        element: <TermPage />,
      },
      {
        path: 'signin/info',
        element: <p>info</p>,
      },
      {
        path: 'password/auth',
        element: <p>인증</p>,
      },
      {
        path: 'password/reset',
        element: <p>재설정</p>,
      },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
