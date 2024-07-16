import { ReactNode, useEffect } from 'react';

import { ACCESS_TOKEN_KEY } from '@/shared/constant/api';
import useStore from '@/shared/store/auth';

const Login = ({ children }: { children: ReactNode }) => {
  const { login } = useStore();

  useEffect(() => {
    if (localStorage.getItem(ACCESS_TOKEN_KEY)) {
      login();
    }
  }, [login]);

  return <>{children}</>;
};

export default Login;
