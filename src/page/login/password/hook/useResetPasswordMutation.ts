import { useMutation } from '@tanstack/react-query';

import { resetPassword } from '@/shared/api/members/password';

export const useResetPasswordMutation = () => {
  const resetPasswordMutation = useMutation({
    mutationFn: (email, password, passwordChecker) => resetPassword(email, password, passwordChecker),
  });

  return resetPasswordMutation;
};
