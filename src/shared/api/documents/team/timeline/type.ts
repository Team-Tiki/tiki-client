export interface TotalDocumentList {
  success: boolean;
  message: string;
  data: { documents: DocumentType[] };
}
