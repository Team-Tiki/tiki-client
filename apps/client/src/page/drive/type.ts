import { components } from '@/shared/__generated__/schema';

export type FolderItem = components['schemas']['FolderGetResponse'];

export type DocumentItem = components['schemas']['DocumentGetResponse'];

export type FilterOption = '최근 업로드 순' | '과거 업로드 순';
