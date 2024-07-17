import { DocumentType } from '@/page/archiving/type/documentType';

export interface TimeBlockData {
  success: boolean;
  message: string;
  data: { documents: DocumentType[] };
}
