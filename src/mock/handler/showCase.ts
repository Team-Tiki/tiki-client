import { HttpResponse, http } from 'msw';

import { showCaseData } from '@/mock/data/showCase';

export const showCaseHandler = [http.get('https://msw-test.com', () => HttpResponse.json(showCaseData))];
