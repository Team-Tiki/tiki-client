import { ReactNode, useEffect } from 'react';

import { axiosInstance } from '@/shared/api/instance';
import { ACCESS_TOKEN_KEY } from '@/shared/constant/api';
import { useLogout } from '@/shared/hook/common/useLogout';
import useStore from '@/shared/store/auth';

const Login = ({ children }: { children: ReactNode }) => {
  const { login } = useStore();

  const { logout } = useLogout();

  /** 앱잼 서버 HTTP 배포로 인해 set-cookie를 통한 refresh token 쿠키에 저장 불가 */
  const reissue = async () => {
    /** 추후 수정 예정 */
    const response = await axiosInstance.get('/auth/reissue', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('refresh')}`,
      },
    });

    const { accessToken } = response.data.data;

    axiosInstance.defaults.headers.Authorization = accessToken;
  };

  useEffect(() => {
    if (!localStorage.getItem(ACCESS_TOKEN_KEY)) {
      logout();
    }

    reissue();

    if (localStorage.getItem(ACCESS_TOKEN_KEY)) {
      login();
    }
  }, [login, logout]);

  return <>{children}</>;
};

export default Login;
