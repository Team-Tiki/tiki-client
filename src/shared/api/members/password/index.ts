import axiosInstance from '@/shared/api/instance';
import { PasswordReset } from '@/shared/api/members/password/type';

export const resetPassword = (data: PasswordReset) => {
  const response = axiosInstance.patch('/members/password', {
    email: data.email,
    password: data.password,
    passwordChecker: data.passwordChecker,
  });

  return response;
};
