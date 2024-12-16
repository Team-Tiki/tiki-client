import { useToastAction } from '@tiki/ui';

import { useMutation } from '@tanstack/react-query';

import { isAxiosError } from 'axios';

import { resetPassword } from '@/shared/api/members/password';
import { PasswordReset } from '@/shared/api/members/password/type';

export const useResetPasswordMutation = () => {
  const { createToast } = useToastAction();

  const resetPasswordMutation = useMutation({
    mutationFn: (data: PasswordReset) => resetPassword(data),
    onSuccess: () => {
      createToast('비밀번호 재설정에 성공했습니다.', 'success');
    },
    onError: (error) => {
      if (isAxiosError<{ message: string }>(error)) {
        createToast(`${error.response?.data.message}`, 'error');
      }
    },
  });

  return resetPasswordMutation;
};
