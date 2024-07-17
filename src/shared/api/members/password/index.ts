import axiosInstance from '@/shared/api/instance';

export const resetPassword = (email: string, password: string, passwordChecker: string) => {
  return axiosInstance.patch('/members/password', {});
};
