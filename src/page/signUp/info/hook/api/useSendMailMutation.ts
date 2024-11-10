import { useMutation } from '@tanstack/react-query';

import { isAxiosError } from 'axios';

import { postEmail } from '@/shared/api/emailVerification/signup';
import { useToastAction } from '@/shared/store/toast';

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
