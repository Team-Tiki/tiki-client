export interface Block {
  timeBlockId: number;
  name: string;
  color: string;
  startDate: Date;
  endDate: Date;
}

export interface TimeBlockList {
  success: boolean;
  message: string;
  data: {
    timeBlocks: Block[];
  };
}
