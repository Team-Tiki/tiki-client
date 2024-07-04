import { setupWorker } from 'msw/browser';

import { handlers } from '@/mocks/handler';

export const worker = setupWorker(...handlers);
