import { useToastAction } from '@tiki/ui';

import { useNavigate } from 'react-router-dom';

import { useMutation } from '@tanstack/react-query';

import { isAxiosError } from 'axios';

import { postSignup } from '@/shared/api/signup/info';
import { UserInfo } from '@/shared/api/signup/info/type';
import { PATH } from '@/shared/constant/path';

export const useSignupMutation = () => {
  const { createToast } = useToastAction();

  const navigate = useNavigate();

  return useMutation({
    mutationFn: (formData: UserInfo) => postSignup(formData),
    onSuccess: () => {
      createToast('회원가입이 완료되었습니다.', 'success');

      navigate(PATH.LOGIN);
    },
    onError: (error) => {
      if (isAxiosError<{ message: string }>(error)) {
        createToast(`${error.response?.data.message}`, 'error');
      }
    },
  });
};
