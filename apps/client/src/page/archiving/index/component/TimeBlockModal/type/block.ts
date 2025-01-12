import { components } from '@/shared/__generated__/schema';

export type TimeBlockData = components['schemas']['TimeBlockCreateRequest'];

export type Category = components['schemas']['TimeBlockCreateRequest']['blockType'];

export type BlockColor = 'red' | 'yellow' | 'green' | 'sky' | 'pink' | 'purple';
