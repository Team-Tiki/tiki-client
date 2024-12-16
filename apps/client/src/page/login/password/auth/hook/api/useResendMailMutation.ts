import { useToastAction } from '@tiki/ui';

import { useMutation } from '@tanstack/react-query';

import { isAxiosError } from 'axios';

import { reSendEmail } from '@/shared/api/email-verification/password';

export const useResendMailMutation = (email: string) => {
  const { createToast } = useToastAction();

  const resendMailMutation = useMutation({
    mutationFn: () => {
      return reSendEmail(email);
    },
    onSuccess: () => {
      createToast('메일을 성공적으로 전송했습니다.', 'success');
    },
    onError: (error) => {
      if (isAxiosError<{ message: string }>(error)) {
        createToast(`${error.response?.data.message}`, 'error');
      }
    },
  });

  return { resendMailMutation };
};
