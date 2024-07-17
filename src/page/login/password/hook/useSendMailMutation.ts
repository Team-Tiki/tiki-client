import { useMutation, useQueryClient } from '@tanstack/react-query';

import { postEmail } from '@/shared/api/mail/checking';

export const useSendMailMutation = (
  email: string,
  setIsMailSent: React.Dispatch<React.SetStateAction<boolean>>,
  startTimer: () => void
) => {
  const queryClient = useQueryClient();
  const { mutate: sendMailMutation, isError: sendMailError } = useMutation({
    mutationFn: () => postEmail(email),
    onMutate: async () => {
      setIsMailSent(true);
      startTimer();
    },
    onSettled: () => {
      return queryClient.invalidateQueries({ queryKey: ['useSendMailQuery'] });
    },
  });

  return { sendMailMutation, sendMailError };
};
