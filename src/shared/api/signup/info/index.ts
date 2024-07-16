import { axiosInstance } from '@/shared/api/instance';
import { UserInfo } from '@/shared/api/signup/info/type';

export const postSignup = async (formData: UserInfo) => {
  const response = await axiosInstance.post<UserInfo>('/members', formData);

  return response;
};
