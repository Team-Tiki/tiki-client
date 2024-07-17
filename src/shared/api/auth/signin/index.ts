import { AxiosResponse } from 'axios';

import { PostLoginRequestBody, PostLoginResonse } from '@/shared/api/auth/signin/type';
import { axiosPublicInstance } from '@/shared/api/instance';

export const postSignIn = async ({ email, password }: PostLoginRequestBody) => {
  const response = await axiosPublicInstance.post<PostLoginRequestBody, AxiosResponse<PostLoginResonse>>(
    '/auth/sign-in',
    {
      email,
      password,
    }
  );

  return response;
};
