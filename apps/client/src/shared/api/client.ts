import createFetchClient from 'openapi-fetch';

import { apiMiddleware, authMiddleware, tokenMiddleware } from '@/shared/api/middleware';
import { paths } from '@/shared/openapi/types';

export const baseUrl = `${import.meta.env.VITE_BASE_URL}/api/v1`;

export const client = createFetchClient<paths>({
  baseUrl,
  credentials: 'include',

  headers: {
    'Content-Type': 'application/json',
  },
});

export const publicClient = createFetchClient<paths>({
  baseUrl,
  credentials: 'include',

  headers: {
    'Content-Type': 'application/json',
  },
});

export const $api = client;

client.use(tokenMiddleware);
client.use(authMiddleware);
client.use(apiMiddleware);
