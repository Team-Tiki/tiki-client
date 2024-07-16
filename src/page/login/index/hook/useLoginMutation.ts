import { useNavigate } from 'react-router-dom';

import { useMutation } from '@tanstack/react-query';

import { postAuthorization } from '@/shared/api/auth';
import { PATH } from '@/shared/constant/path';
import { useToastStore } from '@/shared/store/toast';

export const useLoginMutation = () => {
  const { createToast } = useToastStore();

  const navigate = useNavigate();

  return useMutation({
    mutationFn: postAuthorization,

    onSuccess: () => {
      navigate(PATH.SHOWCASE);
    },

    onError: () => {
      createToast('로그인에 실패하였습니다.', 'error');
    },
  });
};
