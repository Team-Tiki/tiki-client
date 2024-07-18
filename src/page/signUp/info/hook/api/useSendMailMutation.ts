import { useMutation } from '@tanstack/react-query';

import { isAxiosError } from 'axios';

import { postEmail } from '@/shared/api/mail/checking';
import { useToastStore } from '@/shared/store/toast';

export const useSendMailMutation = (email: string) => {
  const { createToast } = useToastStore();

  const { mutate: sendMailMutation } = useMutation({
    mutationFn: () => postEmail(email),
    onSuccess: () => {
      createToast('메일을 성공적으로 전송했습니다.', 'success');
    },
    onError: (error) => {
      if (isAxiosError<{ message: string }>(error)) {
        createToast(`${error.response?.data.message}`, 'error');
      }
    },
  });

  return sendMailMutation;
};
