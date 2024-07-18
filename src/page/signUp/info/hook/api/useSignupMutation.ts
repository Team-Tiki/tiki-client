import { useMutation } from '@tanstack/react-query';

import { isAxiosError } from 'axios';

import { postSignup } from '@/shared/api/signup/info';
import { UserInfo } from '@/shared/api/signup/info/type';
import { useToastStore } from '@/shared/store/toast';

export const useSignupMutation = () => {
  const { createToast } = useToastStore();

  return useMutation({
    mutationFn: (formData: UserInfo) => postSignup(formData),
    onSuccess: () => {
      createToast('회원가입이 완료되었습니다.', 'success');
    },
    onError: (error) => {
      if (isAxiosError<{ message: string }>(error)) {
        createToast(`${error.response?.data.message}`, 'error');
      }
    },
  });
};
