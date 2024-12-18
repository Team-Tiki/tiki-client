export type DocumentItem = {
  documentId: number;
  name: string;
  url: string;
  capacity: number;
  createdTime: string;
  type: 'document';
};

export type FolderItem = {
  folderId: number;
  name: string;
  createdTime: string;
  path: string;
  type: string;
};

export type DriveResponse = {
  success: boolean;
  message: string;
  data: { documents: DocumentItem[]; folders: FolderItem[] };
};
