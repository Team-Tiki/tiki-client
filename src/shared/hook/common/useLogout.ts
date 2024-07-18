import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { ACCESS_TOKEN_KEY } from '@/shared/constant/api';
import { PATH } from '@/shared/constant/path';
import useStore from '@/shared/store/auth';

export const useLogout = () => {
  const { logout: onLogout } = useStore();

  const navigate = useNavigate();

  const logout = useCallback(() => {
    onLogout();

    const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
    const refreshToken = localStorage.getItem('refresh');

    if (accessToken) localStorage.removeItem(ACCESS_TOKEN_KEY);
    if (refreshToken) localStorage.removeItem('refresh');

    navigate(PATH.LOGIN);
  }, [navigate, onLogout]);

  return { logout };
};
