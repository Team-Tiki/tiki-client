import { useMutation, useQueryClient } from '@tanstack/react-query';

import { isAxiosError } from 'axios';

import { postEmail } from '@/shared/api/mail/checking';
import { useToastStore } from '@/shared/store/toast';

export const useSendMailMutation = (email: string, trigger: () => void) => {
  const queryClient = useQueryClient();
  const { createToast } = useToastStore();

  const { mutate: sendMailMutation } = useMutation({
    mutationFn: () => postEmail(email),
    onMutate: async () => {
      trigger();
    },
    onError: (error) => {
      if (isAxiosError<{ message: string }>(error)) {
        createToast(`${error.response?.data.message}`, 'error');
      }
    },
    onSettled: () => {
      return queryClient.invalidateQueries({ queryKey: ['mail'] });
    },
  });

  return sendMailMutation;
};
