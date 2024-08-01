import { useMutation } from '@tanstack/react-query';

import { isAxiosError } from 'axios';

import { postEmail } from '@/shared/api/mail/checking';
import { useToastStore } from '@/shared/store/toast';

export const useSendMailMutation = (email: string, onFail: () => void) => {
  const { createToast } = useToastStore();

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
