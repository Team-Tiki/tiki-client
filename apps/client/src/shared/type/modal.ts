export type ModalSize = 'xSmall' | 'small' | 'medium' | 'large';

export type ActivityTag = {
  timeBlockId: number;
  name: string;
  type: 'MEETING' | 'RECRUITING' | 'STUDY' | 'EVENT' | 'NOTICE' | 'ETC';
  color: string;
  startDate: string;
};
