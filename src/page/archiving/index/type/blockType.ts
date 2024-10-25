import { BlockColor } from './color';

export interface Block {
  timeBlockId: number;
  name: string;
  color: BlockColor;
  startDate: Date;
  endDate: Date;
  blockType: BlockType;
}

export interface TimeBlockList {
  success: boolean;
  message: string;
  data: {
    timeBlocks: Block[];
  };
}

export type BlockType = 'MEETING' | 'NOTICE' | 'ACCOUNTING' | 'TASK' | 'STUDY' | 'EVENT';
