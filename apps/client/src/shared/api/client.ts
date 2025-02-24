import createFetchClient from 'openapi-fetch';
import createClient from 'openapi-react-query';

import { paths } from '@/shared/__generated__/schema';
import { apiMiddleware, authMiddleware, tokenMiddleware } from '@/shared/api/middleware';

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

export const $api = createClient(client);

export const $api_public = createClient(publicClient);

client.use(tokenMiddleware);
client.use(authMiddleware);
client.use(apiMiddleware);
