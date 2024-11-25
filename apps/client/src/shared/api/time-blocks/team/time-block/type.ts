import { DocumentType } from '@/page/archiving/index/type/documentType';

export interface TimeBlockCreate {
  name: string;
  color: string;
  startDate: string;
  endDate: string;
  blockType: string;
  files: Files;
}

export interface TimeBlockData {
  success: boolean;
  message: string;
  data: { documents: DocumentType[] };
}

export interface Files {
  [key: string]: string;
}
