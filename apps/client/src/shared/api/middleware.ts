import * as Sentry from '@sentry/react';
import { Middleware } from 'openapi-fetch';

import { AxiosError } from 'axios';

import { HTTPError } from '@/shared/api/HTTPError';
import { axiosPublicInstance } from '@/shared/api/instance';
import { HTTP_STATUS_CODE, STORAGE_KEY } from '@/shared/constant/api';
import { PATH } from '@/shared/constant/path';

interface ErrorResponse {
  success?: boolean;
  message?: string;
  code?: number;
}
type ReissueResponse = {
  success: boolean;
  message: string;
  data: {
    accessToken: string;
  };
};

/* 토큰 여부 확인 */
export const authMiddleware: Middleware = {
  async onRequest({ request }) {
    const accessToken = localStorage.getItem(STORAGE_KEY.ACCESS_TOKEN_KEY);

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
  async onResponse({ request, response }) {
    const { body, ...rest } = response;

    if (!response.ok) {
      const statusCode = response.status;

      if (statusCode === HTTP_STATUS_CODE.UNAUTHORIZED) {
        try {
          const { data } = await axiosPublicInstance.get<ReissueResponse>('/auth/reissue', {
            headers: {
              Authorization: `Bearer ${localStorage.getItem(STORAGE_KEY.REFRESH_TOKEN_KEY)}`,
            },
          });

          localStorage.setItem(STORAGE_KEY.ACCESS_TOKEN_KEY, data.data.accessToken);

          const newHeaders = {
            ...Object.fromEntries(request.headers.entries()),
            Authorization: `Bearer ${data.data.accessToken}`,
          };

          const newRequest = new Request(request, { headers: newHeaders });
          return fetch(newRequest);
        } catch {
          localStorage.removeItem(STORAGE_KEY.ACCESS_TOKEN_KEY);
          window.location.replace(PATH.LOGIN);

          throw new Error('토큰 갱신에 실패하였습니다.');
        }
      }
    }
    return new Response(body, { ...rest });
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
