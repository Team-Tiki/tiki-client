import { useToastAction } from '@tiki/ui';

import { useMutation } from '@tanstack/react-query';

import { isAxiosError } from 'axios';

import { postEmail } from '@/shared/api/email-verification/signup';

export const useSendMailMutation = (email: string, onFail: () => void) => {
  const { createToast } = useToastAction();

  const sendMailMutation = useMutation({
    mutationFn: () => postEmail(email),
    onError: (error) => {
      onFail();

      if (isAxiosError<{ message: string }>(error)) {
        createToast(`${error.response?.data.message}`, 'error');
      }
    },
  });

  return sendMailMutation;
};
