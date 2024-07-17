import { useMutation } from '@tanstack/react-query';

import { postEmail } from '@/shared/api/password/auth/mail';

export const useSendMailMutation = (address: string) => {
  const { mutate: sendMailMutation, isError: sendMailError } = useMutation({
    mutationKey: ['useSendMailQuery'],
    mutationFn: () => postEmail(address),
  });

  return { sendMailMutation, sendMailError };
};
