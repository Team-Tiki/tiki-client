import { Outlet } from 'react-router-dom';

import LeftSidebar from './shared/component/LeftSidebar/LeftSidebar';

const App = () => {
  return (
    <main>
      <Outlet />
      <LeftSidebar />
    </main>
  );
};

export default App;
