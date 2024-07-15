import { useMutation } from '@tanstack/react-query';

import { checkAuthCode } from '@/shared/api/password/auth/code';

export const useVerifyCodeMutation = (address: string, code: string) => {
  const { mutate } = useMutation({
    mutationKey: ['useVerifyCodeQuery'],
    mutationFn: () => checkAuthCode(address, code),
  });

  return mutate;
};
