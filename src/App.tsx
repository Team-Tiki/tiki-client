import { Outlet } from 'react-router-dom';

import Heading from './common/component/Heading/Heading';

const App = () => {
  return (
    <main>
      <Outlet />
      <Heading heading="H1">가나다라마바사</Heading>
    </main>
  );
};

export default App;
