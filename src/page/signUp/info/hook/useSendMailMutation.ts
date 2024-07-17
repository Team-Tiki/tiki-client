import { useMutation, useQueryClient } from '@tanstack/react-query';

import { postEmail } from '@/shared/api/mail/checking';

export const useSendMailMutation = (email: string, trigger: () => void) => {
  const queryClient = useQueryClient();
  const { mutate: sendMailMutation } = useMutation({
    mutationFn: () => postEmail(email),
    onMutate: async () => {
      trigger();
    },
    onSettled: () => {
      return queryClient.invalidateQueries({ queryKey: ['useSendMailQuery'] });
    },
  });

  return sendMailMutation;
};
