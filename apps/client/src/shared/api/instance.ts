import axios from 'axios';

import { handleAPIError, handleCheckAndSetToken, handleTokenError } from '@/shared/api/interceptor';

export const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}/api/v1`,
  withCredentials: true,

  headers: {
    'Content-Type': 'application/json',
  },
});

export const axiosPublicInstance = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}/api/v1`,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(handleCheckAndSetToken);

axiosInstance.interceptors.response.use((res) => res, handleTokenError);

axiosInstance.interceptors.response.use((res) => res, handleAPIError);
