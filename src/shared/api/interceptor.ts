import { InternalAxiosRequestConfig } from 'axios';

import { ACCESS_TOKEN_KEY } from '@/shared/constant/api';
import { PATH } from '@/shared/constant/path';

export const checkAndUpateToken = (config: InternalAxiosRequestConfig) => {
  if (!config || !config.headers || config.headers.Authorization) return config;

  const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);

  if (!accessToken) {
    window.location.href = PATH.LOGIN;
    throw new Error('토큰이 존재하지 않습니다.');
  }

  config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
};
