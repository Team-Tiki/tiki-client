import { HttpResponse, http } from 'msw';

import { TIMELINE_DATA } from '@/mock/data/timeLine';

export const timeLineHandler = [
  http.get(`/time-blocks/team/:teamId/timeline`, () => {
    return HttpResponse.json(TIMELINE_DATA);
  }),
];
