export interface Block {
  timeBlockId: number;
  name: string;
  color: string;
  startDate: string;
  endDate: string;
  blockType: BlockType;
}

export interface TimeBlockList {
  success: boolean;
  message: string;
  data: {
    timeBlocks: Block[];
  };
}

export type BlockType = 'MEETING' | 'RECRUITING' | 'STUDY' | 'EVENT' | 'NOTICE' | 'ETC';
