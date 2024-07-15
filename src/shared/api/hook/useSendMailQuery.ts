import { useMutation } from '@tanstack/react-query';

import { postEmail } from '@/shared/api/password/auth/mail';

export const useSendMailQuery = (address: string) => {
  const { mutate } = useMutation({
    mutationKey: ['useSendMailQuery'],
    mutationFn: () => postEmail(address),
  });
  return mutate;
};
