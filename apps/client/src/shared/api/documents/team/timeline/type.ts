import { DocumentType } from '@/page/archiving/index/type/documentType';

export interface TotalDocumentList {
  success: boolean;
  message: string;
  data: { documents: DocumentType[] };
}
