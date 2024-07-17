import { PasswordResetInfo } from '@/page/login/password/type/type';

import { useMutation } from '@tanstack/react-query';

import { resetPassword } from '@/shared/api/members/password';

export const useResetPasswordMutation = () => {
  const resetPasswordMutation = useMutation({
    mutationFn: (data: PasswordResetInfo) => resetPassword(data),
  });

  return resetPasswordMutation;
};
