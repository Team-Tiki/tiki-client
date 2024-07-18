import { useMutation, useQueryClient } from '@tanstack/react-query';

import { reSendEmail } from '@/shared/api/mail/password';

export const useResendMailMutation = (
  email: string,
  setIsMailSent: React.Dispatch<React.SetStateAction<boolean>>,
  startTimer: () => void
) => {
  const queryClient = useQueryClient();
  const { mutate: resendMailMutation, isError: resendMailError } = useMutation({
    mutationFn: () => reSendEmail(email),
    onMutate: async () => {
      setIsMailSent(true);
      startTimer();
    },
    onSettled: () => {
      return queryClient.invalidateQueries({ queryKey: ['useSendMailQuery'] });
    },
  });

  return { resendMailMutation, resendMailError };
};
