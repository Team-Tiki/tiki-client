import createFetchClient from 'openapi-fetch';

import { apiMiddleware, authMiddleware, tokenMiddleware } from '@/shared/api/middleware';
import { paths } from '@/shared/openapi/schema';

const baseURL = `${import.meta.env.VITE_BASE_URL}`;

export const client = createFetchClient<paths>({
  baseUrl: baseURL,
  credentials: 'include',

  headers: {
    'Content-Type': 'application/json',
  },
});

export const publicClient = createFetchClient<paths>({
  baseUrl: baseURL,
  credentials: 'include',

  headers: {
    'Content-Type': 'application/json',
  },
});

client.use(tokenMiddleware);
client.use(authMiddleware);
client.use(apiMiddleware);
