export interface Block {
  timeBlockId: number;
  name: string;
  color: string;
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

export interface TotalDocumentType {
  documenyId: number;
  fileName: string;
  fileUrl: string;
}
