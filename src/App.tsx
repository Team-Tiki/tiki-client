import { Outlet } from 'react-router-dom';

import Leaf from '../src/asset/leaf.svg';

const App = () => {
  return (
    <main>
      <Leaf />
      <Outlet />
    </main>
  );
};

export default App;
