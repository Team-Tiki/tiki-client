import { components } from '@/shared/__generated__/schema';

export type TimeBlockData = components['schemas']['TimeBlockCreateRequest'];

export type Category = TimeBlockData['blockType'] | 'NONE';

export type TimeBlockType = Omit<TimeBlockData, 'blockType'> & {
  blockType: Category;
};
export type BlockColor = 'red' | 'yellow' | 'green' | 'sky' | 'pink' | 'purple';
