import { useMutation } from '@tanstack/react-query';

import { checkAuthCode } from '@/shared/api/email-verification/checking';
import { useToastAction } from '@/shared/store/toast';

export const useVerifyCodeMutation = (email: string, code: string) => {
  const { createToast } = useToastAction();

  const verifyCodeMutation = useMutation({
    mutationKey: ['verifyCode', email, code],

    mutationFn: () => checkAuthCode(email, code),

    onSuccess: () => {
      createToast('인증이 완료되었습니다.', 'success');
    },

    onError: () => {
      createToast('인증번호가 일치하지 않습니다.', 'error');
    },
  });

  return verifyCodeMutation;
};
