import { Outlet } from 'react-router-dom';

import Header from './common/component/Header/Header';

const App = () => {
  return (
    <main>
      <Outlet />
      <Header isLogin={false} />
    </main>
  );
};

export default App;
