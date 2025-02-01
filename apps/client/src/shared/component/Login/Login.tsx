import { ReactNode, useEffect } from 'react';

import { STORAGE_KEY } from '@/shared/constant/api';
import { useAuth } from '@/shared/store/auth';

const Login = ({ children }: { children: ReactNode }) => {
  const { login } = useAuth();

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY.ACCESS_TOKEN_KEY)) {
      login();
    }
  }, [login]);

  return <>{children}</>;
};

export default Login;
