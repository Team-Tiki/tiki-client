import { components } from '@/shared/__generated__/schema';

export type FILTER_TYPE = 'ASC' | 'DESC';

export type NoteType = components['schemas']['NoteGetResponse'];

export type NoteListType = components['schemas']['NoteListGetServiceResponse']['noteGetResponseList'];
