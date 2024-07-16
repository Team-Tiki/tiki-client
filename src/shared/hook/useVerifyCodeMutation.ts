import { useMutation, useQueryClient } from '@tanstack/react-query';

import { checkAuthCode } from '@/shared/api/password/auth/code';

export const useVerifyCodeMutation = (email: string, code: string) => {
  const queryClient = useQueryClient();

  const { mutate, isError } = useMutation({
    mutationKey: ['verifyCode', email, code],
    mutationFn: () => checkAuthCode(email, code),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['verifyCode'] });
    },
  });

  return { mutate, isError };
};
