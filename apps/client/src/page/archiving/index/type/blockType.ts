import { components } from '@/shared/__generated__/schema';

export type BlockType = 'MEETING' | 'RECRUITING' | 'STUDY' | 'EVENT' | 'NOTICE' | 'ETC';

export type Block = components['schemas']['TimeBlockGetResponse'];
