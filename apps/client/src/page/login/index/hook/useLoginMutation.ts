import { useToastAction } from '@tiki/ui';

import { useNavigate } from 'react-router-dom';

import { useMutation } from '@tanstack/react-query';

import { AxiosError } from 'axios';

import { ERROR_MESSAGE } from '@/page/login/index/constant';

import { postSignIn } from '@/shared/api/auth/signin';
import { axiosInstance } from '@/shared/api/instance';
import { HTTP_STATUS_CODE, STORAGE_KEY } from '@/shared/constant/api';
import { PATH } from '@/shared/constant/path';

export const useLoginMutation = () => {
  const { createToast } = useToastAction();

  const navigate = useNavigate();

  return useMutation({
    mutationFn: postSignIn,

    onSuccess: ({ data: { accessToken } }) => {
      localStorage.setItem(STORAGE_KEY.ACCESS_TOKEN_KEY, accessToken);

      axiosInstance.defaults.headers.Authorization = `Bearer ${accessToken}`;

      const isExistingUser = !!localStorage.getItem(STORAGE_KEY.TEAM_ID);

      isExistingUser
        ? navigate(`${PATH.DASHBOARD}?teamId=${localStorage.getItem(STORAGE_KEY.TEAM_ID)}`)
        : navigate(PATH.ONBOARDING);
    },

    onError: (
      error: AxiosError<{
        success: boolean;
        message: string;
      }>
    ) => {
      if (!error.response) return;

      const { message } = error.response.data;

      if (message) {
        return createToast(error.response.data.message, 'error');
      } else if (error.response.status === HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR) {
        return createToast('일시적인 오류가 발생했습니다. 잠시 후 다시 시도해주세요', 'error');
      }

      createToast(ERROR_MESSAGE.OTHER, 'error');
    },
  });
};
