import { ListTag } from '@/page/dashboard/type/listTag';

export type Note = {
  noteId: number;
  title: string;
  content: string;
  date: Date;
  tags: ListTag[];
};
