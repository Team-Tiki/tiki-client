import { ERROR_MESSAGE } from '@/page/login/index/constant';

import { useNavigate } from 'react-router-dom';

import { useMutation } from '@tanstack/react-query';

import { AxiosError } from 'axios';

import { postSignIn } from '@/shared/api/auth/signin';
import { axiosInstance } from '@/shared/api/instance';
import { ACCESS_TOKEN_KEY, HTTP_STATUS_CODE } from '@/shared/constant/api';
import { PATH } from '@/shared/constant/path';
import { useToastStore } from '@/shared/store/toast';

export const useLoginMutation = () => {
  const { createToast } = useToastStore();

  const navigate = useNavigate();

  return useMutation({
    mutationFn: postSignIn,

    onSuccess: ({ data: { accessToken, refreshToken } }) => {
      localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
      localStorage.setItem('refresh', refreshToken);

      axiosInstance.defaults.headers.Authorization = `Bearer ${accessToken}`;

      navigate(PATH.SHOWCASE);
    },

    onError: (error: AxiosError) => {
      if (!error.response) return;

      const { status } = error.response;

      if (status === HTTP_STATUS_CODE.BAD_REQUEST) {
        createToast(ERROR_MESSAGE[HTTP_STATUS_CODE.BAD_REQUEST], 'error');
        return;
      }
      if (status === HTTP_STATUS_CODE.NOT_FOUND) {
        createToast(ERROR_MESSAGE[HTTP_STATUS_CODE.NOT_FOUND], 'error');
        return;
      }
      createToast(ERROR_MESSAGE.OTHER, 'error');
    },
  });
};
