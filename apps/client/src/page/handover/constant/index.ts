import { components } from '@/shared/__generated__/schema';

export const FILTER_OPTION = [{ value: '최근 작성된 순' }, { value: '과거 작성된 순' }];

export const FILTER_ORDER = { '최근 작성된 순': 'ASC', '과거 작성된 순': 'DESC' };

export type FILTER_TYPE = 'ASC' | 'DESC';

export type Note = components['schemas']['NoteGetResponse'];
