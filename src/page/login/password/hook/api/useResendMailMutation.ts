import { useMutation, useQueryClient } from '@tanstack/react-query';

import { isAxiosError } from 'axios';

import { reSendEmail } from '@/shared/api/mail/password';
import { useToastStore } from '@/shared/store/toast';

export const useResendMailMutation = (
  email: string,
  setIsMailSent: React.Dispatch<React.SetStateAction<boolean>>,
  startTimer: () => void
) => {
  const queryClient = useQueryClient();
  const { createToast } = useToastStore();
  const { mutate: resendMailMutation, isError: resendMailError } = useMutation({
    mutationFn: () => reSendEmail(email),
    onMutate: async () => {
      setIsMailSent(true);
      startTimer();
    },
    onError: (error) => {
      if (isAxiosError<{ message: string }>(error)) {
        createToast(`${error.response?.data.message}`, 'error');
        setIsMailSent(false);
      }
    },
    onSettled: () => {
      return queryClient.invalidateQueries({ queryKey: ['useSendMailQuery'] });
    },
  });

  return { resendMailMutation, resendMailError };
};
