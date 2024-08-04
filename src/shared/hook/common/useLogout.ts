import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { useQueryClient } from '@tanstack/react-query';

import { PATH } from '@/shared/constant/path';
import { useAuth } from '@/shared/store/auth';

export const useLogout = () => {
  const { logout: onLogout } = useAuth();

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const logout = useCallback(() => {
    onLogout();

    localStorage.clear();

    queryClient.clear();

    navigate(PATH.LOGIN);
  }, [navigate, onLogout, queryClient]);

  return { logout };
};
