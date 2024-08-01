import { useMutation } from '@tanstack/react-query';

import { isAxiosError } from 'axios';

import { reSendEmail } from '@/shared/api/mail/password';
import { useToastStore } from '@/shared/store/toast';

export const useResendMailMutation = (email: string) => {
  const { createToast } = useToastStore();
  const { mutate: resendMailMutation, isError: resendMailError } = useMutation({
    mutationFn: () => reSendEmail(email),
    onSuccess: () => {
      createToast('메일을 성공적으로 전송했습니다.', 'success');
    },
    onError: (error) => {
      if (isAxiosError<{ message: string }>(error)) {
        createToast(`${error.response?.data.message}`, 'error');
      }
    },
  });

  return { resendMailMutation, resendMailError };
};
