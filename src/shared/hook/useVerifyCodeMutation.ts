import { useMutation, useQueryClient } from '@tanstack/react-query';

import { checkAuthCode } from '@/shared/api/password/auth/code';

export const useVerifyCodeMutation = (email: string, code: string) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ['verifyCode', email, code],
    mutationFn: () => checkAuthCode(email, code),
    retry: 3,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['verifyCode'] });
      return true;
    },
  });

  return mutate;
};
