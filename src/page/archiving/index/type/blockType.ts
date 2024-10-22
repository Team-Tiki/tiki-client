import { BlockColor } from './color';

export interface Block {
  timeBlockId: number;
  name: string;
  color: BlockColor;
  startDate: Date;
  endDate: Date;
  blockType: 'MEETING' | 'ACCOUNTING' | 'TASK' | 'NOTICE' | 'STUDY' | 'EVENT';
}

export interface TimeBlockList {
  success: boolean;
  message: string;
  data: {
    timeBlocks: Block[];
  };
}
