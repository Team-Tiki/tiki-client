import { useMutation } from '@tanstack/react-query';

import { resetPassword } from '@/shared/api/members/password';
import { PasswordReset } from '@/shared/api/members/password/type';

export const useResetPasswordMutation = () => {
  const resetPasswordMutation = useMutation({
    mutationFn: (data: PasswordReset) => resetPassword(data),
  });

  return resetPasswordMutation;
};
