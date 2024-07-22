import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';

import { axiosInstance } from '@/shared/api/instance';
import { ACCESS_TOKEN_KEY, HTTP_STATUS_CODE } from '@/shared/constant/api';
import { PATH } from '@/shared/constant/path';

interface ErrorResponse {
  success?: boolean;
  message?: string;
  code?: number;
}

type TokenResponse = {
  accessToken: string;
};

export const handleCheckAndSetToken = (config: InternalAxiosRequestConfig) => {
  if (!config || !config.headers || config.headers.Authorization) return config;

  const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);

  if (!accessToken) {
    window.location.href = PATH.ROOT;
    throw new Error('토큰이 존재하지 않습니다.');
  }

  config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
};

export const handleTokenError = async (error: AxiosError<ErrorResponse>) => {
  const originRequest = error.config;

  if (!error.response || !originRequest) throw new Error('에러가 발생했습니다.');

  const { status } = error.response;

  if (status === HTTP_STATUS_CODE.UNAUTHORIZED || status === HTTP_STATUS_CODE.NOT_FOUND) {
    const refreshToken = localStorage.getItem('refresh');

    if (!refreshToken) {
      window.location.href = PATH.ROOT;
      throw new Error('리프레시 토큰이 존재하지 않습니다.');
    }

    try {
      const { data } = await axios.get<TokenResponse>(`${import.meta.env.VITE_BASE_URL}/api/v1/auth/reissue`, {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      });

      localStorage.setItem(ACCESS_TOKEN_KEY, data.accessToken);
      originRequest.headers.Authorization = `Bearer ${data.accessToken}`;

      return axiosInstance(originRequest);
    } catch (error) {
      localStorage.removeItem(ACCESS_TOKEN_KEY);
      localStorage.removeItem('refresh');
      window.location.href = PATH.ROOT;
      throw new Error('토큰 갱신에 실패하였습니다.');
    }
  }

  return Promise.reject(error);
};
