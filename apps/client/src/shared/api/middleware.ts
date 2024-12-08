import * as Sentry from '@sentry/react';
import { Middleware } from 'openapi-fetch';

import { AxiosError } from 'axios';

import { HTTPError } from '@/shared/api/HTTPError';
import { getReissuedToken } from '@/shared/api/auth/reissue';
import { ACCESS_TOKEN_KEY, HTTP_STATUS_CODE } from '@/shared/constant/api';
import { PATH } from '@/shared/constant/path';

interface ErrorResponse {
  success?: boolean;
  message?: string;
  code?: number;
}

/* 토큰 여부 확인 */
export const authMiddleware: Middleware = {
  async onRequest({ request }) {
    const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);

    if (!accessToken) {
      window.location.replace(PATH.LOGIN);
      throw new Error('토큰이 존재하지 않습니다.');
    }

    request.headers.set('Authorization', `Bearer ${accessToken}`);

    return request;
  },
};

/* 토큰 갱신 */
export const tokenMiddleware: Middleware = {
  async onError({ error, request }) {
    const axiosError = error as AxiosError<ErrorResponse>;
    const originRequest = axiosError.config;

    if (!axiosError.response || !originRequest) {
      throw new Error('에러가 발생했습니다.');
    }

    const { status } = axiosError.response;

    if (status === HTTP_STATUS_CODE.UNAUTHORIZED) {
      try {
        const { data } = await getReissuedToken();
        localStorage.setItem(ACCESS_TOKEN_KEY, data.accessToken);

        /* 기존의 Authorization 헤더를 갱신 후 재요청 */
        const newHeaders = {
          ...Object.fromEntries(request.headers.entries()),
          Authorization: `Bearer ${data.accessToken}`,
        };

        const newRequest = new Request(request, { headers: newHeaders });
        const newResponse = await fetch(newRequest);

        if (!newResponse.ok) {
          const errorData = await newResponse.json().catch(() => ({ message: '재요청 실패' }));

          throw new HTTPError(newResponse.status, errorData.message);
        }

        return newResponse;
      } catch (error) {
        localStorage.removeItem(ACCESS_TOKEN_KEY);
        window.location.replace(PATH.LOGIN);

        throw new Error('토큰 갱신에 실패하였습니다.');
      }
    }

    return Promise.reject(axiosError);
  },
};

export const apiMiddleware: Middleware = {
  async onError({ error }) {
    const axiosError = error as AxiosError<ErrorResponse>;

    if (!axiosError.response) {
      throw axiosError;
    }

    Sentry.withScope((scope) => {
      scope.setLevel('error');
      scope.captureMessage(`[API Error] ${window.location.href}`);
    });

    const { data, status } = axiosError.response;

    if (status >= HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR) {
      throw new HTTPError(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR, data.message);
    }

    throw new HTTPError(status, data.message);
  },
};
