import { useMutation } from '@tanstack/react-query';

import { checkAuthCode } from '@/shared/api/mail/signup';

export const useVerifyCodeMutation = (email: string, code: string) => {
  const verifyCodeMutation = useMutation({
    mutationKey: ['verifyCode', email, code],
    mutationFn: () => checkAuthCode(email, code),
  });

  return verifyCodeMutation;
};
