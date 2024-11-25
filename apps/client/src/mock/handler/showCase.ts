import { HttpResponse, http } from 'msw';

import { CLUBDATA } from '@/mock/data/showCase';

export const showCaseHandler = [http.get('/team', () => HttpResponse.json(CLUBDATA))];
