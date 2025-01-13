import { useToastAction } from '@tiki/ui';
import { useTimer } from '@tiki/utils';

import { useState } from 'react';

import { useMutation } from '@tanstack/react-query';

import { isAxiosError } from 'axios';

import { postEmail } from '@/shared/api/email-verification/signup';

export const useSendMail = (email: string) => {
  const { createToast } = useToastAction();

  const { remainTime, handleTrigger, handleReset } = useTimer(60, () => {
    alert('유효시간이 지났습니다.');
    setIsVerified(false);
  });

  const [isVerified, setIsVerified] = useState(false);

  const sendMailMutation = useMutation({
    mutationFn: () => postEmail(email),
    onMutate: () => {
      setIsVerified(true);

      handleTrigger();
    },
    onError: (error) => {
      isVerified && setIsVerified(false);

      handleReset();

      if (isAxiosError<{ message: string }>(error)) {
        createToast(`${error.response?.data.message}`, 'error');
      }
    },
  });

  return {
    send: sendMailMutation.mutate,
    isVerified,
    remainTime,
  };
};
