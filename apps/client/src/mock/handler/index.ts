import { HttpResponse, http } from 'msw';

import { showCaseHandler } from '@/mock/handler/showCase';
import { timeLineHandler } from '@/mock/handler/timeLine';
import { workspaceHandler } from '@/mock/handler/workspace';

const errorhandler = [
  http.get(`${import.meta.env.VITE_BASE_URL}/api/v1/500`, () => {
    return new HttpResponse('error', { status: 500 });
  }),
  http.get(`${import.meta.env.VITE_BASE_URL}/api/v1/401`, () => {
    return new HttpResponse('error', { status: 401 });
  }),
];

export const handlers = [...showCaseHandler, ...timeLineHandler, ...workspaceHandler, ...errorhandler];
