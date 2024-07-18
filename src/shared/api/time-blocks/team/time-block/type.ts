import { DocumentType } from '@/page/archiving/index/type/documentType';

export interface TimeBlockCreate {
  name: string;
  color: string;
  startDate: string;
  endDate: string;
  blockType: string;
  files: Map<string, string>;
}

export interface TimeBlockData {
  success: boolean;
  message: string;
  data: { documents: DocumentType[] };
}
