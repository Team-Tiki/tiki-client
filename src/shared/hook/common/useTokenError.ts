import { useNavigate } from 'react-router-dom';

import { useQueryClient } from '@tanstack/react-query';

import { PATH } from '@/shared/constant/path';
import { useAuth } from '@/shared/store/auth';
import { useToastAction } from '@/shared/store/toast';

export const useTokenError = () => {
  const { logout } = useAuth();

  const { createToast } = useToastAction();

  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const handleTokenError = () => {
    logout();

    localStorage.clear();

    queryClient.clear();

    navigate(PATH.ROOT);

    createToast('다시 로그인해주세요.');
  };

  return { handleTokenError };
};
