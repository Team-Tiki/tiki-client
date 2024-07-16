import { axiosInstance } from '@/shared/api/instance';

interface PostLoginRequestBody {
  email: string;
  password: string;
}

export const postAuthorization = async ({ email, password }: PostLoginRequestBody) => {
  const response = await axiosInstance.post<PostLoginRequestBody>('/auth/login', {
    email,
    password,
  });

  return response;
};
