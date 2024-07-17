import { DocumentType } from '@/page/archiving/type/documentType';

export interface TotalDocumentList {
  success: boolean;
  message: string;
  data: { documents: DocumentType[] };
}
